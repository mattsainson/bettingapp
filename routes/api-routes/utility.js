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
            fs.writeFile("../../data/rundown.json", JSON.stringify(result.body), function (err) {
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
    fs.readFile("../../data/rundown.json", function (err, data) {
        if (err) {
            res.status(400).end();
        }
        var myData = JSON.parse(data);
        console.log("myData", myData);
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
            createEntry(db, gameAt, teams, spread, spreadPayout, ml);
        }
        res.status(200).end();
    });
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
}

module.exports = router;