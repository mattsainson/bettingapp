const db = require("../models");

// Defining methods for the BetTransactionsController
module.exports = {
    findAll: function (req, res) {
        db.BetTransaction
            .findAll({order: [['id', 'DESC']]})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.BetTransaction
            .findOne({
                where: {
                  id: req.params.id
                }
              })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.BetTransaction
            .create(req.body)
            .then(dbModel => {
                return dbModel;
            })
            .catch(err => {return {err: err};});
    },
    update: function (req, res) {
        db.BetTransaction
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.BetTransaction
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
