const express = require("express");
const {
  handleUserLogin,
  handleUserLogout,
} = require("../controllers/authController");

const router = express.Router();

// ROUTE NAME: "/api/auth"

// Authenticates an existing user and returns an access token.
router.post("/login", handleUserLogin);

// Invalidates the user's session or token.
router.post("/logout", handleUserLogout);

module.exports = router;
