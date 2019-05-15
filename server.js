// require("dotenv").config();
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
//     app.use(express.static("public"));
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
    //put seed code here
});

module.exports = app;
