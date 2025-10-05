const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    conversationName: {
      type: String,
      trim: true,
      unique: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    participantsName: [
      {
        type: String,
      },
    ],
    isGroup: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversation", conversationSchema);

module.exports = Conversation;
