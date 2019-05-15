const router = require("express").Router();
// const gamesController = require("../../controllers/gamesController");
// const teamsController = require("../../controllers/teamsController");
const utilityController = require("../../controllers/utilityController");
var db = require("../../models");
var unirest = require('unirest');
require('dotenv').config();
// const simulator = require();

// /api/utility/simulator
router.get("/simulator", function (req, res) {
    unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/3/events?include=all_periods%2C+scores%2C+and%2For+teams")
        .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", process.env.RAPIDAPI_KEY)
        .then((result) => {
            // // fs.writeFile("results.json", JSON.stringify(result.body), function (err) {
            //     if (err) {
            //         return console.log(err);
            //     }
            var myData = result.body;
            // console.log("data", myData);
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
                console.log('teams', teams);
                createEntry(db, gameAt, teams, spread, spreadPayout, ml);


            }
            res.status(200).end();
        })
});

function createEntry(db, gameAt, teams, spread, spreadPayout, ml) {
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
                spread: spread[k],
                spreadPayout: spreadPayout[k],
                moneylinePayout: ml[k],
                score: 0,
                home: !!k
            })
            // console.log("Spread", spread[i]);
            // console.log("Payout", spreadPayout[i]);
            // console.log("ML", ml[i]);
            // console.log(teams);
        }
    })
}
module.exports = router;
