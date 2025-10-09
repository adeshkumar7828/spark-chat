import { io } from "socket.io-client";

const URL = "http://localhost:3000";

export const socket = io(URL, { autoConnect: true, withCredentials: true });

socket.on("connect", () => {
  console.log("WebSocket connected");
});

socket.on("disconnect", () => {
  console.log("Websocket disconnected");
});
