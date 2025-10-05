const express = require("express");
const {
  handleCreateConverstation,
  handleGetAllConversation,
  handleGetConversationByID,
} = require("../controllers/conversationController");

const checkAuthByCookie = require("../middlewares/authMiddlewareCookie.js");

const router = express.Router();

// ROUTE NAME: "/api/conversations"

router.post("/", checkAuthByCookie, handleCreateConverstation);
router.get("/", checkAuthByCookie, handleGetAllConversation);
router.get("/:_id", checkAuthByCookie, handleGetConversationByID);

module.exports = router;
