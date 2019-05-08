const router = require('express').Router();
const betsRoutes = require('./bets.js');
const betTransactionsRoutes = require('./betTransactions.js');
const gamesRoutes = require('./games.js');
const usersRoutes = require('./users.js');

// All routes
router.use('/posts', betsRoutes);
router.use('/posts', betTransactionsRoutes);
router.use('/posts', gamesRoutes);
router.use('/posts', usersRoutes);

module.exports = router;
