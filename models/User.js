const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [8, "Minimum password length must be 8 characters"],
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
  role: {
    type: Number,
    default: 0, //0 = normal user; 1 = admin user
  },
});

module.exports = User = mongoose.model("user", UserSchema);
