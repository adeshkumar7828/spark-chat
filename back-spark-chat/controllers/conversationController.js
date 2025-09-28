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

    res.json({
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

    res.json({ msg: "Hello from handleGetAllConversation", conversations });
  } catch (error) {
    res.json({
      msg: "Unable to fetch conversation",
      error,
    });
  }
}

async function handleGetConversationByID(req, res) {
  try {
    const { _id } = req.params;

    const requestedConversation = await Conversation.find({
      participants: { $all: [req.user._id, _id] },
    });
    res.json({
      msg: "Hello from hadnleGetCOnversation by id",
      requestedConversation,
    });
  } catch (error) {
    res.json({ msg: "Unable to fetch the conversation", error });
  }
}

module.exports = {
  handleCreateConverstation,
  handleGetAllConversation,
  handleGetConversationByID,
};
