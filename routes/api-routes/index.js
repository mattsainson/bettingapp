const router = require('express').Router();
const betsRoutes = require('./bets');
const betTransactionsRoutes = require('./betTransactions');
const gamesRoutes = require('./games');
const usersRoutes = require('./users');
const teamsRoutes = require('./teams');

// All routes
router.use('/bets', betsRoutes);
router.use('/money', betTransactionsRoutes);
router.use('/games', gamesRoutes);
router.use('/users', usersRoutes);
router.use('/teams', teamsRoutes);

module.exports = router;
