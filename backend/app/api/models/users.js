const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  test: {
    type: [Number],
    required: false
  },
  date: {
    type: Date,
    trim: true,
    required: true
  },
  testDuration: {
    type: Number,
    required: true
  },
  questions: {
    type: [Object]
  }
});
module.exports = mongoose.model("User", UserSchema);
