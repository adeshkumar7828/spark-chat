const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectionToDB = require("./config/db.js");

// import router
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const conversationRouter = require("./routes/conversationRoutes.js");

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

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
