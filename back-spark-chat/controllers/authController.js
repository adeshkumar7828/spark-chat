const User = require("../models/userSchema");
const { generateToken } = require("../utils/generateToken.js");

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    return res.status(401).json({ message: "User does not exists!!" });
  }

  const isCorrectPassword = await userExists.comparePassword(password);

  if (userExists && isCorrectPassword) {
    const { _id, userName, email } = userExists;
    const token = generateToken(_id);

    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use 'secure: true' in production
      sameSite: "strict", // Provides CSRF protection
      maxAge: 3600000, // 1 hour (in milliseconds)
    });

    res.status(200).json({
      _id,
      userName,
      email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
}

function handleUserLogout(req, res) {
  res.send("hello from handleUserLogout");
}

module.exports = {
  handleUserLogin,
  handleUserLogout,
};
