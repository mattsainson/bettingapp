const db = require("../models");

// Defining methods for the usersController
module.exports = {
    simulator: function (req, res) {
        console.log('i called the simulator');
        
        res.status(200);
    }
};
