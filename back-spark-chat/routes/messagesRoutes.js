const express = require("express");
const {
  handleCreateMessage,
  handleGetMessagesOfConversation,
} = require("../controllers/messagesController.js");
const {
  checkAuthenticationfromBearer,
} = require("../middlewares/authMiddlewareBearer.js");

const router = express.Router();

// ROUTE NAME: "/api/messages"
router.post("/", checkAuthenticationfromBearer, handleCreateMessage);
router.get(
  "/:conversation_id",
  checkAuthenticationfromBearer,
  handleGetMessagesOfConversation
);

module.exports = router;
