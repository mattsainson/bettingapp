const router = require('express').Router();
const betsRoutes = require('./bets');
const betTransactionsRoutes = require('./betTransactions');
const gamesRoutes = require('./games');
const usersRoutes = require('./users');
const teamsRoutes = require('./teams');
const grabDataFillDB = require('./grabDataFillDB');
const runGames = require('./runGames');


// All routes
router.use('/bets', betsRoutes);
router.use('/money', betTransactionsRoutes);
router.use('/games', gamesRoutes);
router.use('/users', usersRoutes);
router.use('/teams', teamsRoutes);
router.use('/grabDataFillDB', grabDataFillDB);
router.use('/runGames', runGames);


module.exports = router;
