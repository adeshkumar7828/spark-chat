const Message = require("../models/messageSchema");

async function handleCreateMessage(req, res) {
  try {
    const { _id } = req.user;
    const { content, conversationId } = req.body;

    const createdMsg = await Message.create({
      createdBy: _id,
      content,
      conversationId,
    });

    res.json({ msg: "Message Sucessfully created", createdMsg });
  } catch (error) {
    res.json({
      msg: "Unable to create message",
      error,
    });
  }
}

async function handleGetMessagesOfConversation(req, res) {
  try {
    const { conversation_id } = req.params;
    const requestedMessagesOfConversation = await Message.find({
      conversationId: { $all: [conversation_id] },
    });
    res.json({
      msg: "Hello from handleGetMessagesOfCOnversation",
      requestedMessagesOfConversation,
    });
  } catch (error) {
    res.json({
      msg: "Unable to fetch messages from given conversation ID",
      error,
    });
  }
}

module.exports = { handleCreateMessage, handleGetMessagesOfConversation };
