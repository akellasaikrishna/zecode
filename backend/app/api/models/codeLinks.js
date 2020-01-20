const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionBankSchema = new Schema({
  jobRoleID: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  },
  questionsArray: {
    type: [Object]
  }
});
module.exports = mongoose.model("QuestionBank", QuestionBankSchema);
