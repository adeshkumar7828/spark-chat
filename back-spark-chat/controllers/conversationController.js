const Conversation = require("../models/conversation");
const {
  generateConversationName,
} = require("../utils/generateConversationName");

async function handleCreateConverstation(req, res) {
  try {
    const conversationName = generateConversationName(
      req.user.userName,
      req.body.chatWith
    );
    const participants = [req.user._id, req.body.chatWith_id];

    const newConversation = await Conversation.create({
      conversationName,
      participants,
    });

    res.send({
      msg: "Conversation Created",
      newConversation,
    });
  } catch (error) {
    res.status(401).json({
      msg: "Error occured in creating conversation",
      error,
    });
  }
}

async function handleGetAllConversation(req, res) {
  const loggedinUserId = req.user._id;
  try {
    const conversations = await Conversation.find({
      participants: loggedinUserId,
    });

    res.send({ msg: "Hello from handleGetAllConversation", conversations });
  } catch (error) {
    res.send({
      msg: "Unable to fetch conversation",
      error,
    });
  }
}

module.exports = { handleCreateConverstation, handleGetAllConversation };
