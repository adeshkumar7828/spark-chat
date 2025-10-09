const socketConnect = function (io) {
  // const chatIo = io.of('/chat');  //will use later for notifications

  io.on("connection", (socket) => {
    console.log(`A user connected with ID: ${socket.id}`);

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
    });

    socket.on("newMessage", (message) => {
      io.to(message.createdMsg.conversationId).emit("messageReceived", message);
    });

    socket.on("leaveRoom", (roomId) => {
      socket.leave(roomId);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = socketConnect;
