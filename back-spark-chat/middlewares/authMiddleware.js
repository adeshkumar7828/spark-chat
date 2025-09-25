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
      req.body = await User.findById(verifiedUser.id).select(["-password"]);
      console.log(req.body);
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  next();
}

module.exports = { checkAuthentication };
