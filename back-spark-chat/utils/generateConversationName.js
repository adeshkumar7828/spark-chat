function generateConversationName(arg1, arg2) {
  const user1 = arg1.toLowerCase().split(" ").join("");
  const user2 = arg2.toLowerCase().split(" ").join("");
  const usersArray = [user1, user2];
  const conversationName = usersArray.sort().join("");

  return conversationName;
}

module.exports = { generateConversationName };
