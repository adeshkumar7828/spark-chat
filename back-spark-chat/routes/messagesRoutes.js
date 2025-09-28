const express = require("express");
const {
  handleCreateMessage,
  handleGetMessagesOfConversation,
} = require("../controllers/messagesController.js");
const { checkAuthentication } = require("../middlewares/authMiddleware.js");

const router = express.Router();

// ROUTE NAME: "/api/messages"
router.post("/", checkAuthentication, handleCreateMessage);
router.get(
  "/:conversation_id",
  checkAuthentication,
  handleGetMessagesOfConversation
);

module.exports = router;
