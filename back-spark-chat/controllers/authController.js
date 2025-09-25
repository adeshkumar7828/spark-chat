const User = require("../models/userSchema");

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists)
    return res.status(401).json({ message: "User does not exists!!" });

  const isCorrectPassword = await userExists.comparePassword(password);

  if (userExists && isCorrectPassword) {
    res
      .status(200)
      .json({ msg: "login successful write logic for login later" });
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
