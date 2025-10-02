const express = require("express");
const {
  handleLoggedInUser,
  handleCreateUser,
  handleGetUsersBySearch,
} = require("../controllers/userController");

const checkAuthByCookie = require("../middlewares/authMiddlewareCookie.js");

const router = express.Router();

// ROUTE NAME: "/api/users"

// Retrieves the currently authenticated user's details
router.get("/me", checkAuthByCookie, handleLoggedInUser);

router.post("/register", handleCreateUser);
router.get("/:query", handleGetUsersBySearch);

module.exports = router;
