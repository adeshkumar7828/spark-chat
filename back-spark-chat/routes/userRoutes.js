const express = require("express");
const {
  handleGetUser,
  handleCreateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", handleGetUser);
router.post("/register", handleCreateUser);

module.exports = router;
