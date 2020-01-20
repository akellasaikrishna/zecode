//Set up mongoose connection
const mongoose = require("mongoose");
const MongoClient = require("mongoose");
const mongoDB = "mongodb://localhost/zecode";
MongoClient.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;
module.exports = mongoose;
