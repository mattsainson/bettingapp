const router = require("express").Router();
const betTransactionsController = require("../../controllers/betTransactionsController");

// Matches with "/api/bettransactions"
router.route("/")
  .get(betTransactionsController.findAll)
  .post(betTransactionsController.create);

// Matches with "/api/bettransactions/:id"
router
  .route("/:id")
  .get(betTransactionsController.findById)
  .put(betTransactionsController.update)
  .delete(betTransactionsController.remove);

module.exports = router;
