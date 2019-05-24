const db = require("../models");

// Defining methods for the BetsController
module.exports = {
    findAll: function (req, res) {
        db.Bet
            .findAll({order: [['id', 'DESC']]})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Bet
            .findOne({
                where: {
                  id: req.params.id
                }
              })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Bet
            .create(req.body)
            .then(dbModel => {
                return dbModel
            })
            .catch(err => {return err;}).json(err);
    },
    update: function (req, res) {
        db.Bet
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Bet
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};


// Build function to process bets

