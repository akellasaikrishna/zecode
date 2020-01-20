const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CreditsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  testCredits: {
    type: Number,
    required: true
  },
  testComments: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("TestCredits", CreditsSchema);
