import { io } from "socket.io-client";

const URL = import.meta.env.VITE_SOCKET_URL;

export const socket = io(URL, { autoConnect: true, withCredentials: true });

socket.on("connect", () => {
  console.log("WebSocket connected");
});

socket.on("disconnect", () => {
  console.log("Websocket disconnected");
});
