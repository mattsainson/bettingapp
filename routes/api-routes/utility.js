const router = require("express").Router();
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
var db = require("../../models");
var unirest = require('unirest');
require('dotenv').config();
const fs = require("fs");
const path = require("path");

// /api/utility/getrundown: gets the data from the rundown API and load it into a json file
// this is called once; after that we use initdb to keep getting it from the data/results.json 
router.get("/getrundown", function (req, res) {
  unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/3/events?include=all_periods%2C+scores%2C+and%2For+teams")
    .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPIDAPI_KEY)
    .then((result) => {
      fs.writeFile("rundown.json", JSON.stringify(result.body), function (err) {
        if (err) {
          return console.log(err);
        }
        res.status(200).end();
      })
    });
});

// /api/utility/initdb: resets the games and teams data to the initial state
// assumes you have dropped the games and teams tables in the db
router.get("/initdb", function (req, res) {
  console.log('initdb');
  fs.readFile(path.join(__dirname, "../../data/rundown.json"), "utf8", function (error, data) {
    if (error) {
      res.status(400).end();
    }
    console.log('rundown.json', data);
    var myData = JSON.parse(data);
    var spread = [];
    var spreadPayout = [];
    var ml = [];
    for (var i = 0; i < myData.events.length; i++) {
      var gameAt = myData.events[i].event_date;
      spread.push(myData.events[i].lines[1].spread.point_spread_away);
      spread.push(myData.events[i].lines[1].spread.point_spread_home);
      spreadPayout.push(myData.events[i].lines[1].spread.point_spread_away_money);
      spreadPayout.push(myData.events[i].lines[1].spread.point_spread_home_money);
      ml.push(myData.events[i].lines[1].moneyline.moneyline_away);
      ml.push(myData.events[i].lines[1].moneyline.moneyline_home);
      var teams = myData.events[i].teams;
      createGame(db, gameAt, teams, spread, spreadPayout, ml);
    }
    res.status(200).end();
  });
});

function createGame(db, gameAt, teams, spread, spreadPayout, ml) {
  db.Game.create({
    sport: 'Baseball',
    league: "MLB",
    gameAt: gameAt,
    state: 'Scheduled',
  }).then(function (game) {
    console.log('teams', teams);
    for (var k = 0; k < teams.length; k++) {
      db.Team.create({
        gameId: game.id,
        name: teams[k].name,
        home: !!k,
        spread: spread[k],
        spreadPayout: spreadPayout[k],
        moneylinePayout: ml[k],
        score: 0
      })
    }
  })
};

router.get("/rungames", function (req, res) {
  var gameIDs = [3, 5, 7]
  for (var i = 0; i < gameIDs.length; i++) {
    console.log('running game', gameIDs[i]);
    db.Game.update({ state: "Ended" }, { where: { id: gameIDs[i] } })
  }
  db.Team.update({ score: 2 }, { where: { id: 5 } })
  db.Team.update({ score: 6 }, { where: { id: 6 } })
  db.Team.update({ score: 4 }, { where: { id: 9 } })
  db.Team.update({ score: 1 }, { where: { id: 10 } })
  db.Team.update({ score: 3 }, { where: { id: 13 } })
  db.Team.update({ score: 1 }, { where: { id: 14 } })
  res.status(200).end();
})

router.get("/doBets", function (req, res) {
  doBets();
  res.status(200).end();
})

function doBets() {
  db.Game.findAll({ where: { state: "Ended" } })
    .then(function (games) {
      console.log('games processing', games.length);
      for (var i = 0; i < games.length; i++) {
        // console.log("Game Data", games);
        betPayout(games[i].id);
      }
    })
};

function betPayout(gameId) {
  db.Bet.findAll({ where: { gameId: gameId } })
    .then(function (bets) {
      console.log('bets for game ' + gameId, bets.length)
      for (var i = 0; i < bets.length; i++) {
        console.log("Bets type:", bets[i].betType);
        (bets[i].betType === "Moneyline") ? mlPayout(bets[i]) : spreadPayout(bets[i]);
      }
      return;
    })
}

function mlPayout(bet) {
  // console.log(bet);
  db.Team.findAll({ where: { gameId: bet.gameId } })
    .then(function (teams) {
      var winnings = 0;
      const winningTeam = (teams[0].score > teams[1].score) ? 0 : 1;
      if (teams[winningTeam].id === bet.teamId) {
        if (teams[winningTeam].moneylinePayout < 0) {
          winnings = ((bet.wager / Math.abs(teams[winningTeam].moneylinePayout) * 100) + bet.wager);
        } else {
          winnings = (bet.wager + teams[winningTeam].moneylinePayout);
        }
        console.log("ML Payout", teams[winningTeam].moneylinePayout);
      } else {
        console.log('i lose');
        winnings = 0;
      }
      console.log("ML Winnings", winnings)
      var betResult = (winnings > 0) ? 'Win' : 'Lose';
      db.Bet.update({ result: betResult, processedAt: new Date() }, { where: { id: bet.id } });
      createTransaction({ userId: bet.userId, betId: bet.id, transactionAmount: winnings });
    })
}

function createTransaction(transaction) {
  db.BetTransaction.create(transaction);
}

function spreadPayout(bet) {
  db.Team.findAll({ where: { gameId: bet.gameId } })
    .then(function (teams) {
      var winnings = 0;
      var favorite = (teams[0].spread < 0) ? 0 : 1;
      var spread = Math.abs(teams[favorite].spread)
      var underdog = (favorite) ? 0 : 1;
      var iBetUnderdog = (teams[underdog].id === bet.teamId)
      var scoreDiff = Math.abs(teams[favorite].score - teams[underdog].score);
      var betResult = '';

      if (iBetUnderdog) {
        if (teams[underdog].score > teams[favorite].score) {
          betResult = 'Win';
        } else if (scoreDiff = spread) {
          betResult = 'Push';
        } else if (scoreDiff < spread) {
          betResult = 'Win';
        } else {
          betResult = 'Lose';
        };
      } else {
        if (scoreDiff = spread) {
          betResult = 'Push';
        } else if (scoreDiff > spread) {
          betResult = 'Win';
        } else {
          betResult = 'Lose';
        };
      };

      var payout = (iBetUnderdog) ? Math.abs(teams[underdog].spreadPayout) : Math.abs(teams[favorite].spreadPayout);
      switch (betResult) {
        case 'Win':
          winnings = bet.wager * (100/payout)+ bet.wager;
          break;
        case 'Lose':
          winnings = 0;
          break;
        case 'Push':
          winnings = bet.wager;
          break;
      }

      console.log("Spread Winnings", winnings);
      createTransaction({ userId: bet.userId, betId: bet.id, transactionAmount: winnings });
      db.Bet.update({ result: betResult, processedAt: new Date() }, { where: { id: bet.id } });
    })
}

router.get("/placebets", function (req, res) {
  console.log('placebets');
  db.Bet.create({
    userId: 1,
    gameId: 3,
    teamId: 5,
    betType: "Moneyline",
    wager: 100,
    result: "Pending"
  }),
    db.Bet.create({
      userId: 1,
      gameId: 5,
      teamId: 7,
      betType: "Spread",
      wager: 50,
      result: "Pending"
    }),
    db.Bet.create({
      userId: 1,
      gameId: 7,
      teamId: 12,
      betType: "Spread",
      wager: 100,
      result: "Pending"
    })
  res.status(200).end();
})

module.exports = router;