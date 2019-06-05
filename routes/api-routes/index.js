const router = require('express').Router();
const betsRoutes = require('./bets');
const betTransactionsRoutes = require('./betTransactions');
const gamesRoutes = require('./games');
const usersRoutes = require('./users');
const teamsRoutes = require('./teams');
const adminRoutes = require('./admin');
const isAuthenticated = require("../../controllers/authentication");


// All routes
router.use('/bets', betsRoutes);
router.use('/money', betTransactionsRoutes);
router.use('/games', gamesRoutes);
router.use('/users', usersRoutes);
router.use('/teams', teamsRoutes);
router.use('/admin', adminRoutes);

module.exports = router;