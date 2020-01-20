const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require("mongoose-unique-validator");
const UtilsSchema = new Schema({
  testName: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  testValue: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  }
});
UtilsSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("Utils", UtilsSchema);
