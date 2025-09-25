const User = require("../models/userSchema");

async function handleLoggedInUser(req, res) {
  try {
    const { userName, email, profilePicture } = req.body;
    res.status(200).json({
      userName,
      email,
      profilePicture,
    });
  } catch (error) {
    res.status(400).json(error);
  }
}

async function handleCreateUser(req, res) {
  try {
    const { userName, email, password, profilePicture } = req.body;

    const newUser = await User.create({
      userName,
      email,
      password,
      profilePicture,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  handleLoggedInUser,
  handleCreateUser,
};
