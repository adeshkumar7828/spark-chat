const express = require("express");
const {
  handleCreateConverstation,
  handleGetAllConversation,
  handleGetConversationByID,
} = require("../controllers/conversationController");
const {
  checkAuthenticationfromBearer,
} = require("../middlewares/authMiddlewareBearer.js");

const router = express.Router();

// ROUTE NAME: "/api/conversations"

router.post("/", checkAuthenticationfromBearer, handleCreateConverstation);
router.get("/", checkAuthenticationfromBearer, handleGetAllConversation);
router.get("/:_id", checkAuthenticationfromBearer, handleGetConversationByID);

module.exports = router;
