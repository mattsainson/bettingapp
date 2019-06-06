const router = require("express").Router();
const betsController = require("../../controllers/betsController");
const isAuthenticated = require("../../controllers/authentication");

// Matches with "/api/bets"
router.route("/")
  .get(isAuthenticated, betsController.findAll)
  .post(betsController.create);

// Matches with "/api/bets/user/:id"
router
  .route("/user/:id")
  .get(isAuthenticated, betsController.findByUserId)

// Matches with "/api/bets/:id"
router
  .route("/:id")
  .get(isAuthenticated, betsController.findById)
  .put(isAuthenticated, betsController.update)
  .delete(betsController.remove);

module.exports = router;