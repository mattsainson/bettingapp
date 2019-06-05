const router = require("express").Router();
const betsController = require("../../controllers/betsController");

// Matches with "/api/bets"
router.route("/")
  .get(betsController.findAll)
  .post(betsController.create);

// Matches with "/api/bets/user/:id"
router
  .route("/user/:id")
  .get(betsController.findByUserId)

// Matches with "/api/bets/:id"
router
  .route("/:id")
  .get(betsController.findById)
  .put(betsController.update)
  .delete(betsController.remove);

module.exports = router;