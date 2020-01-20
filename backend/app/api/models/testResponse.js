const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResponseSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  codeResponses: [String]
});
module.exports = mongoose.model("TestResponse", ResponseSchema);
