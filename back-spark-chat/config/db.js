const mongoose = require("mongoose");

async function connectionToDB(mongoURI) {
  try {
    const res = await mongoose.connect(mongoURI);
    console.log(`MongoDB connection sucessful at: ${res.connection.host}`);
  } catch (err) {
    console.log(`Error occured in db connection: ${err}`);
    process.exit(1);
  }
}

module.exports = connectionToDB;
