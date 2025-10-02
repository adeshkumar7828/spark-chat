const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectionToDB = require("./config/db.js");

// import router
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const conversationRouter = require("./routes/conversationRoutes.js");
const messagesRouter = require("./routes/messagesRoutes.js");

const app = express();

// CORS Setup
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// cookier-parser
app.use(cookieParser());

// Load variables from .env file
dotenv.config();

// PORT
const PORT = process.env.PORT || 3000;

// Data Connection
connectionToDB(process.env.MONGO_URI_LOCAL);

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

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
