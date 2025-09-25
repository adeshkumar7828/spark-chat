const express = require("express");
const {
  handleUserLogin,
  handleUserLogout,
} = require("../controllers/authController");

const router = express.Router();

// Authenticates an existing user and returns an access token.
router.post("/login", handleUserLogin);

// Invalidates the user's session or token.
router.post("/logout", handleUserLogout);

// Retrieves the currently authenticated user's details
// router.get("/me", handleCurrentUserDetails);

module.exports = router;
