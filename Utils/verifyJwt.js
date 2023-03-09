const createHttpError = require("http-errors");

function verifyJWT(req, res, next) {
  const authheader = req.headers.authorization;
  if (!authheader) return createHttpError(401, "Unauthorized Access!");
}

module.exports = verifyJWT();
