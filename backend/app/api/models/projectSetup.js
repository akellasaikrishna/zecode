const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSetupSchema = new Schema({
  domainID: {
    type: Number,
    required: true,
    unique: true
  },
  setup: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("ProjectSetup", ProjectSetupSchema);
