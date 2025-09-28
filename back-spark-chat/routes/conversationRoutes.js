const express = require("express");
const {
  handleCreateConverstation,
  handleGetAllConversation,
  handleGetConversationByID,
} = require("../controllers/conversationController");
const { checkAuthentication } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", checkAuthentication, handleCreateConverstation);
router.get("/", checkAuthentication, handleGetAllConversation);
router.get("/:_id", checkAuthentication, handleGetConversationByID);

module.exports = router;
