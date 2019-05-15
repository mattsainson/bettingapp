require("dotenv").config();
// *** Dependencies
// =============================================================
const express = require("express");
const routes = require('./routes');
var cors = require("cors")
var bodyParser = require("body-parser")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


var Users = require('./routes/Users')

app.use('/users', Users)

// Static directory
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// else {
// app.use(express.static("client/public"));
// }

// Routes
// Add routes, both API and view
app.use(routes);
// =============================================================
// require("./routes/index.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize
    .sync()
    .then(function () {
        console.log("Nice! Database looks fine");
    })
    .catch(function (err) {
        console.log(err, "Something went wrong with the Database Update!");
    });

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });

    //     db.Bet.create({
    //     userId: 1,
    //     gameId: 1,
    //     teamId: 1,
    //     betType: 'Spread',
    //     wager: 200
    // });

    // db.Bet.create({
    //     userId: 1,
    //     gameId: 2,
    //     teamId: 2,
    //     betType: 'Spread',
    //     wager: 100
    // });

    // db.Bet.create({
    //     userId: 1,
    //     gameId: 3,
    //     teamId: 1,
    //     betType: 'Moneyline',
    //     wager: 300
    // });

    // db.User.create({
    //     email: 'mattsainson@gmail.com',
    //     password: 'password',
    //     name: 'Matt',
    //     balance: 1500,
    //     isActive: true
    // });

    // db.User.create({
    //     email: 'kyle@gmail.com',
    //     password: 'password',
    //     name: 'Kyle',
    //     balance: 2433,
    //     isActive: true
    // });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-11T12:18:34.100Z',
    //     state: 'Scheduled'
    // });
    // db.Team.create({
    //     gameId: 1,
    //     name: 'Kings',
    //     home: true,
    //     spread: 5,
    //     spreadPayout: 110,
    //     moneylinePayout: 180,
    //     score: 0
    // });
    // db.Team.create({
    //     gameId: 1,
    //     name: 'Warriors',
    //     home: false,
    //     spread: -5,
    //     spreadPayout: -110,
    //     moneylinePayout: -180,
    //     score: 0
    // });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-10T12:18:34.100Z',
    //     state: 'Started'
    // });
    // db.Team.create({
    //     gameId: 2,
    //     name: 'Celtics',
    //     home: false,
    //     spread: 12,
    //     spreadPayout: 120,
    //     moneylinePayout: 160,
    //     score: 56,
    //     home: false
    // });
    // db.Team.create({
    //     gameId: 2,
    //     name: 'Lakers',
    //     home: true,
    //     spread: -12,
    //     spreadPayout: -120,
    //     moneylinePayout: -155,
    //     score: 32,
    //     home: true
    // });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-09T12:18:34.100Z',
    //     state: 'Ended'
    // });
    // db.Team.create({
    //     gameId: 3,
    //     name: 'Bulls',
    //     home: true,
    //     spread: -6,
    //     spreadPayout: -130,
    //     moneylinePayout: -160,
    //     score: 102,
        //     home: true
    // });
    // db.Team.create({
    //     gameId: 3,
    //     name: 'Sixers',
    //     home: false,
    //     spread: 6,
    //     spreadPayout: 130,
    //     moneylinePayout: 145,
    //     score: 87,
        //     home: false
    // });

    // db.BetTransaction.create({
    //     userId: 1,
    //     betId: 1,
    //     transactionAt: '2019-05-11T12:18:34.100Z',
    //     transactionAmount: 100
    // });

    // db.BetTransaction.create({
    //     userId: 1,
    //     betId: 2,
    //     transactionAt: '2019-05-12T12:18:34.100Z',
    //     transactionAmount: 100
    // });

    // db.BetTransaction.create({
    //     userId: 1,
    //     betId: 3,
    //     transactionAt: '2019-05-13T12:18:34.100Z',
    //     transactionAmount: 100
    // });



});

module.exports = app;
