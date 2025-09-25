const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// save the password as hash before saving to db
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// adding method in schema to compare the password provided
userSchema.methods.comparePassword = function (providedPasswordForLogin) {
  return bcrypt.compare(providedPasswordForLogin, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
