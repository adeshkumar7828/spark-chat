const jwt = require("jsonwebtoken");
const User = require("../models/userSchema.js");

async function checkAuthByCookie(req, res, next) {
  try {
    // get token from cookies
    const { token } = req.cookies;
    if (!token) return next();

    // verify the token
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //   attach the verifiedUserId user's details into the req.body
    req.user = await User.findById(verifiedUser.id).select(["-password"]);
    console.log(req.user);
    return next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
}

module.exports = checkAuthByCookie;
