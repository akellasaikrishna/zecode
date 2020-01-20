const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobRolesSchema = new Schema({
  jobRoleID: {
    type: Number,
    required: true,
    unique: true
  },
  jobRoleTitle: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Roles", JobRolesSchema);
