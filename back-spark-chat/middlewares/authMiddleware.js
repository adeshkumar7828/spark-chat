const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

async function checkAuthentication(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from headers
      token = req.headers.authorization.split(" ")[1];
      // verify the token
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //   attach the verifiedUserId user's details into the req.body
      req.user = await User.findById(verifiedUser.id).select(["-password"]);

      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "Not authorized, no token",
    });
  }
}

module.exports = { checkAuthentication };
