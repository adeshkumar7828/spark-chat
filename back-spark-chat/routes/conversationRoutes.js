const express = require("express");
const {
  handleCreateConverstation,
  handleGetAllConversation,
} = require("../controllers/conversationController");
const { checkAuthentication } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", checkAuthentication, handleCreateConverstation);
router.get("/", checkAuthentication, handleGetAllConversation);

module.exports = router;
