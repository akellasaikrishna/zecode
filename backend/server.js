const express = require("express");
const logger = require("morgan");
const cors = require("express");
const users = require("./routes/users");
const login = require("./routes/login");
const utils = require("./routes/utils");
const response = require("./routes/testResponse");
const codeLinks = require("./routes/codeLinks");
const testCredits = require("./routes/testCredits");
const projectSetup = require("./routes/projectSetup");
const jobRoles = require("./routes/jobRoles");
const bodyParser = require("body-parser");
const mongoose = require("./config/database");
var jwt = require("jsonwebtoken");
const app = express();
app.set("secretKey", "nodeRestApi");
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.json({ tutorial: "Build REST API with node.js" });
});
app.use("/users", users);
app.use("/login", login);
app.use("/utils", utils);
app.use("/test", codeLinks);
app.use("/response", response);
app.use("/testCredits", testCredits);
app.use("/projectSetup", projectSetup);
app.use("/jobRoles", jobRoles);
app.get("/favicon.ico", function(req, res) {
  res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(
    err,
    decoded
  ) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      req.body.userId = decoded.id;
      next();
    }
  });
}
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something Went Wrong" });
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Node server listening on port ${port}`);
});
