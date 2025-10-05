const mongoose = require("mongoose");
const Conversation = require("../models/conversation");
const {
  generateConversationName,
} = require("../utils/generateConversationName");

async function handleCreateConverstation(req, res) {
  try {
    const conversationName = generateConversationName(
      req.user.userName,
      req.body.userName
    );
    const createdWith = req.body.userName;

    const participants = [req.user._id, req.body._id];

    const newConversation = await Conversation.create({
      conversationName,
      participants,
      createdWith,
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
      participants: { $in: [loggedinUserId] },
    });

    res.json(conversations);
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

    // had to convert the string _id from request params into an ObjectId
    // const params_id = mongoose.Types.ObjectId.createFromHexString(_id);
    // const requestedConversation = await Conversation.find({
    //   participants: { $all: [req.user._id, params_id] },
    // });

    const requestedConversation = await Conversation.find({
      _id,
    });
    res.json(requestedConversation);
  } catch (error) {
    res.json({ msg: "Unable to fetch the conversation", error });
  }
}

module.exports = {
  handleCreateConverstation,
  handleGetAllConversation,
  handleGetConversationByID,
};
