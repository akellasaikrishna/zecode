const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});
// hash user password before saving into database
LoginSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = mongoose.model("Login", LoginSchema);
