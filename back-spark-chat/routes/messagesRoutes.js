const express = require("express");
const {
  handleCreateMessage,
  handleGetMessagesOfConversation,
} = require("../controllers/messagesController.js");

const checkAuthByCookie = require("../middlewares/authMiddlewareCookie.js");

const router = express.Router();

// ROUTE NAME: "/api/messages"
router.post("/", checkAuthByCookie, handleCreateMessage);
router.get(
  "/:conversation_id",
  checkAuthByCookie,
  handleGetMessagesOfConversation
);

module.exports = router;
