const db = require("../models");

// Defining methods for the BetsController
module.exports = {
    findAll: function (req, res) {
        db.Bet
            .findAll({ order: [['id', 'DESC']] })
            .then(async bets => {
                const bets = await db.Bet.findAll();
                // console.log("games", games);
                // console.log("teams", teams);
                const newBets = bets.map(b => ({
                    userId: b.id,
                    gameId: b.gamesId,
                    teamId: b.teamId,
                    betType: b.betType,
                    wager: b.wager,
                    result: b.result,
                    teams: teams.filter(t => t.id === b.teamId)
                }),
                );
                res.status(200).send(newBets);
            })
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
    findByUserId: function (req, res) {
        db.Bet
            .findAll({
                where: {
                    userId: req.params.id
                }
            }, { order: [['id', 'DESC']] })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Bet
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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