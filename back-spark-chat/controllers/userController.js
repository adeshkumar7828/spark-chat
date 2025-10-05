const User = require("../models/userSchema");

async function handleLoggedInUser(req, res) {
  try {
    const { _id, userName, email, profilePicture } = req.user;
    res.status(200).json({
      userName,
      email,
      profilePicture,
      _id,
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

async function handleGetUsersBySearch(req, res) {
  try {
    const { query } = req.params;

    if (!query || query.length < 3) {
      return res
        .status(400)
        .json({ message: "Search query is missing or less than 3 chars" });
    }

    const result = await User.find({
      userName: { $regex: query, $options: "i" },
    });

    const dataToSend = result.map((el) => {
      const newEl = { userName: el.userName, _id: el._id };
      return newEl;
    });

    res.status(200).json(dataToSend);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  handleLoggedInUser,
  handleCreateUser,
  handleGetUsersBySearch,
};
