const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const cors = require('cors');
const isAuthenticated = require("../../controllers/authentication");



// const User = require("../../models/user")
router.use(cors())

// Matches with "/api/users"
router.route("/")
  .get(isAuthenticated, usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
  process.env.SECRET_KEY = 'secret'

router.route("/register")
.post(usersController.create);


router.route("/login")
.post(usersController.findOne);



module.exports = router;
