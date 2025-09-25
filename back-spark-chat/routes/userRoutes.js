const express = require("express");
const {
  handleLoggedInUser,
  handleCreateUser,
} = require("../controllers/userController");
const { checkAuthentication } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/me", checkAuthentication, handleLoggedInUser);
router.post("/register", handleCreateUser);

module.exports = router;
