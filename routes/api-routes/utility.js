const router = require("express").Router();
const utilityController = require("../../controllers/utilityController");

// Matches with "/api/games"
router.route("/")
  .get(utilityController.findAll)
  .post(utilityController.create);

// Matches with "/api/games/:id"
router
  .route("/:id")
  .get(utilityController.findById)
  .put(utilityController.update)
  .delete(utilityController.remove);

module.exports = router;
