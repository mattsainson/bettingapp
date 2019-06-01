const jwt = require("jsonwebtoken");
// jwt middleware
module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  let bearer = "";
  if (token) {
    bearer = token.replace("Bearer ", "")
  } else {
    return res.status(403).json({
      error: "Not Authenticated"
    });
  }

  jwt.verify(bearer, "my-website-secrete", function(err, decoded) {
    if (err) {
      console.error(err);
      res.status(403).json({
        error: "Not Authenticated"
      });
    }
    console.log(decoded);
    req.user = decoded;
    next();
  });
}
