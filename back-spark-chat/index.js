const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectionToDB = require("./config/db.js");
const socketConnect = require("./socket/socketIO.js");

// import router
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const conversationRouter = require("./routes/conversationRoutes.js");
const messagesRouter = require("./routes/messagesRoutes.js");

const corsOptions = {
  origin: [process.env.ORIGIN],
  credentials: true,
};

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: corsOptions });

// CORS Setup
const cors = require("cors");
app.use(cors(corsOptions));

// cookier-parser
app.use(cookieParser());

// Load variables from .env file
dotenv.config();

// PORT
const PORT = process.env.PORT || 3000;

// Data Connection
connectionToDB(process.env.MONGO_URI_ATLAS);

// parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from the server again");
});

// ROUTES
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messagesRouter);

socketConnect(io);

server.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
