// var axios = require('axios');
var fs = require('fs')
var unirest = require('unirest');
const gamesRoutes = require('./games');
const usersRoutes = require('./users');
const teamsRoutes = require('./teams');
const db = require("../models");



unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/3/events?include=all_periods%2C+scores%2C+and%2For+teams")
    .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", process.env.RAPIDAPI_KEY)
    .end(function (result) {
        fs.writeFile("results.json", JSON.stringify(result.body), function (err) {
            if (err) {
                return console.log(err);
            }

        })
    });

// app.post("/", function (req, result) {
//     // db.Games.findAll({ where: { sport: 3 } })
//     //     .then(function (game) {
//     //         var sport = 0;
//     //         var league = "MLB";
//     //         var gameAt = 0;
//     //         var location = "Sacramento";
//     //         var state = "CA";
//     console.log("Running!")
//             for (var i = 0; i < object.events.length; i++) {
//                 db.Games.create({

//                     sport: Object.events[i].sport_id,
//                     league: "MLB",
//                     gameAt: Object.events[i].event_date,
//                     location: "Sacramento",
//                     state: "CA"
//                 })
//                     .then(function (id) {

//                             db.Team.create({
//                                 gameId: id,
//                                 name: Object.events.["item " + i].teams[1].name,
// homeTeam: true,
// spread: Object.events[i].lines.1.spread.point_spread_home,
// spreadPayout: Object.events[i].lines.1.spread.point_spread_home_money,
// moneylinePayout: Object.events[i].1.lines.moneyline.moneyline_home,
// score: '0'
// })
// }else{
//         db.Team.create({
//             gameId: id,
//             name: Object.events[i].teams[1].name,
//             homeTeam: false,
//             spread: Object.events[i].lines.spread.point_spread_away,
//             spreadPayout: Object.events[i].lines.spread.point_spread_away_money,
//             moneylinePayout: Object.events[i].lines.moneyline.moneyline_away,
//             score: '0'
//         })
//     }
//     })
//         .then()

//     } 
// })


// event id events[i].event_id mapTo(Teams.gameId)
// home team events[i].teams[1].name mapTo(Teams.name)
// home team ML events[i].lines.1.moneyline.moneyline_home mapTo(Teams.moneylinePayout)
// home team Spread events[i]lines.spread.point_spread_home mapTo(Teams.spread)
// home team Spread events[i].lines.1.spread.point_spread_home_money mapTo(Teams.spreadPayout)
// away team events[i].teams[0].name mapTo(Teams.name) 
// away team ML events[i].lines.1.moneyline.moneyline_away mapTo(Teams.moneylinePayout)
// away team Spread events[i]lines.spread.point_spread_away mapTo(Teams.spread)
// away team Spread events[i]lines.spread.point_spread_away_money mapTo(Teams.spreadPayout)      








module.exports = unirest;