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
            // console.log('teams', teams);
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
        // console.log("game", game)
        // var teams = [];
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
            // console.log("Spread", spread[i]);
            // console.log("Payout", spreadPayout[i]);
            // console.log("ML", ml[i]);
            // console.log(teams);
        }
    })
};

router.get("/rungames", function (req, res) {
    console.log('rungames');

    var gameIDs = [3, 5, 7]
    for (var i = 0; i < gameIDs.length; i++) {
        db.Game.update({ state: "Ended" }, { where: { id: gameIDs[i] } })
    }
    db.Team.update({ score: 2 }, { where: { id: 5 } })
    db.Team.update({ score: 6 }, { where: { id: 6 } })
    db.Team.update({ score: 4 }, { where: { id: 9 } })
    db.Team.update({ score: 1 }, { where: { id: 10 } })
    db.Team.update({ score: 3 }, { where: { id: 13 } })
    db.Team.update({ score: 1 }, { where: { id: 14 } })
    result();
    res.status(200).end();
})


// .then(function (result) {
//     console.log(result);
//     (function () {
//         for (var k = 0; k < db.Bet.length; k++) {
//             console.log("Bet", db.Bets)
//             db.BetTransactions.update({
//                 userId: Bet[k].userId,
//                 betId: Bet[k].id,
//                 transactionAt: Bet[k].createdAt,
//                 transactionAmount: Bet[k].wager,
//             })
//         };
//     })
// });

function result() {
    db.Game.findAll({ where: { state: "ended" } })
        .then(function (games) {
            console.log("Game Data", games);
            for (var i = 0; i < games.length; i++) {
                db.Team.findAll({ where: { gameId: games[i].id } })
                    .then(function (teams) {
                        console.log("Team Data", teams);
                        betPayout(games);
                    })
            }
        })
};

function betPayout(games) {
    for (var i = 0; i < games.length; i++) {
    db.Bet.findAll({ where: { gameId: games[i].id } })
        .then(function (bets, teams) {
            // console.log("Bets data:", bets)
            for (var k = 0; k < bets.length; k++) {
                console.log("Bets type:", bets[k].betType)
                if (bets[k].betType === "moneyline") {
                    mlPayout(games, teams);
                } else {
                    spreadPayout(games, teams);
                }
            }
        })
}
}

function mlPayout(teams) {
    console.log("ML Payout", teams)
    for (var k = 0; k < teams.length; k++) {
        if (teams[0].score > teams[1].score) {
            console.log("Away wins!", teams[0].gameId);
            if (teams[0].moneylinePayout < 0) {
                var winnings = ((100 / Math.abs(teams[0].moneylinePayout) * 100) + 100);
            } else {
                var winnings = (100 + teams[0].moneylinePayout);
            } console.log("ML Payout", teams[0].moneylinePayout);
        } else {
            console.log("Home wins!", teams[1].gameId);
            if (teams[1].moneylinePayout < 0) {
                var winnings = ((100 / Math.abs(teams[1].moneylinePayout) * 100) + 100);
            } else {
                var winnings = (100 + teams[1].moneylinePayout);
            } console.log("ML Payout", teams[1].moneylinePayout);
        }
        console.log("ML Winnings", winnings)
    }
}

function spreadPayout(teams) {
    console.log("Spread Payout", teams)
    for (var k = 0; k < teams.length; k++) {
        if (teams[0].score > teams[1].score) {
            if (Math.abs(teams[0].score - teams[1].score) < teams.spread) {
                var winnings = ((100 / (Math.abs(teams[0].spreadPayout) * 100) + 100));
            } else {
                console.log("Spread Loss", teams[0].spreadPayout)
            }
        } else {
            // If team[0].score < team[1].score
            if (Math.abs(teams[0].score - teams[1].score) < teams.spread) {
                var winnings = ((100 / (Math.abs(teams[0].spreadPayout) * 100) + 100));
            } else {
                console.log("Spread Loss", teams[0].spreadPayout)
            }

            console.log("Spread Winnings", winnings)
        }
    }
}
//         db.Team.findAll({where: { gameId: endedGames[0] }})
//         .then(function(result){
//             console.log("Team Data", result);
//         })

// }
//         .then(function(result){
//             console.log(result)
//     })





//     function spreadResult (result, wager, spreadPayout) {
//     //    If you win the game straight up then......
//     if (result === win){    
//     function win(diff, spread){
//             if (spread>diff){
//                 console.log("Loss!")
//                 balance +0
//             }else if(spread<diff){
//                 console.log("Win!")
//                 Math(wager+(100/spreadPayout))
//             }else{
//                 console.log("Push!")
//                 balance+wager
//             }
//         }
//     }else{
//         // If you lose the game straight up then......
//         function loss(diff, spread){
//             if (spread<diff){
//                 console.log("Loss!")
//             }else if(spread>diff){
//                 console.log("Win!")
//             }else{
//                 console.log("Push!")
//             }
//         }
//     }
// };
//     function getpayout(result, wager, spreadPayout){
//     // Switch case to update balance

//             if(result === win){
//                 // If you win add the original wager and winnings to balance
//               balance = wager + ((100/spreadPayout)*wager);
//             }
//             else if (result === loss){
//                 // If loss add nothing to balance
//               balance = 0;
//             }else{
//                 // If push add the original wager to the balance
//                balance = wager;
//             }         
//     }
//     })
// })


router.get("/placebets", function (req, res) {
    console.log('placebets');
    db.Bet.create({
        userId: 1,
        gameId: 1,
        teamId: 2,
        betType: "moneyline",
        wager: 100,
        result: "pending"
    }),
        db.Bet.create({
            userId: 1,
            gameId: 4,
            teamId: 4,
            betType: "spread",
            wager: 50,
            result: "pending"
        }),
        db.Bet.create({
            userId: 1,
            gameId: 8,
            teamId: 15,
            betType: "spread",
            wager: 100,
            result: "pending"
        })
    res.status(200).end();
})

// router.get("/transactions", function (req, res) {
//     console.log('transactions');
//     db.BetTransaction.create({
//         userId: db.Bet.userId,
//         betId: db.Bet.id,
//         transactionAmount: db.Bet.wager
// })

module.exports = router;