const User = require("../models/userSchema");

async function handleGetUser(req, res) {
  try {
    res.send("Hello from handleGetUser");
  } catch (error) {
    res.status(400).json(error);
  }

  res.send("Hello from the getUser");
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
  handleGetUser,
  handleCreateUser,
};
