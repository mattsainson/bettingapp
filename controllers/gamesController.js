const db = require("../models");

// Defining methods for the GamesController
module.exports = {
    findAll: function (req, res) {
        db.Game
            .findAll({ order: [['gameAt', 'DESC']] })
            .then(async games => {
                const teams = await db.Team.findAll();
                // console.log("games", games);
                // console.log("teams", teams);
                const newGames = games.map(g => ({
                    id: g.id,
                    gameAt: g.gameAt,
                    state: g.state,
                    teams: teams.filter(t => t.gameId === g.id)
                }),
                );  
                console.log("new games", newGames)             
        res.status(200).send(newGames);
    })
            .catch(err => {console.log(err)
                res.status(422).json(err)});
},
    findById: function (req, res) {
        db.Game
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
create: function (req, res) {
    db.Game
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
update: function (req, res) {
    db.Game
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
remove: function (req, res) {
    db.Game
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
}


};
