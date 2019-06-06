const jwt = require("jsonwebtoken");
// jwt middleware
module.exports = function (req, res, next) {
  let token = req.header("Authorization");
  if (!token) {
    res.status(401).json({
      error: "Not Authenticated"
    });
  }

  jwt.verify(token.replace("Bearer ", ""), "super-secret", function(err, decoded) {
    if (err) {
      console.error(err);
      res.status(401).json({
        error: "Not Authenticated"
      });
    }
    req.user = decoded;
    next();
  });
}

