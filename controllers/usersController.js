const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the usersController
module.exports = {
    findOne: function(req, res) {
        const { email, password } = req.body;
        console.log(req.body);
        db.User
          .findOne({ where: {email: email} })
          .then(dbModel => {
            if(!dbModel) {
              return res.status(404).json({
                error: "Username and password not matching"
              });
            }
            bcrypt.compare(password, dbModel.password, function(err, same) {
              if (err) {
                return res.status(500).json({
                  error: "Something went wrong"
                })
              }
              if (!same) {
                return res.status(404).json({
                  error: "Password and Username are not matching!"
                });
              }
              const { email, _id: id, balance, name } = dbModel;
    
              const token = jwt.sign({
                  email,
                   id,
                   balance,
                   name
                }, "super-secret");
                // console.log(token)
              return res.json({
                id,
                email,
                token,
                balance,
                name
              })
              
            })
          })
          .catch(err => res.status(422).json(err));
      },
    findAll: function (req, res) {
        db.User
            .findAll({order: [['name', 'ASC']]})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findOne({
                where: {
                  id: req.params.id
                }
              })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const password = bcrypt.hashSync(req.body.password, 10);
        const name = req.body.name;
        const email = req.body.email;
        const balance = req.body.balance;

        db.User
            .create({name, password, email, balance})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
