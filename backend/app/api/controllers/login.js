const loginModel = require("../models/login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  Token: tk,
  create: function(req, res, next) {
    loginModel.create(
      {
        email: req.body.email,
        password: req.body.password
      },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "User added successfully!!!",
            data: null
          });
      }
    );
  },
  authenticate: function(req, res, next) {
    loginModel.findOne({ email: req.body.email }, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (userInfo != null) {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign(
              { id: userInfo._id },
              req.app.get("secretKey"),
              {
                expiresIn: "1h"
              }
            );
            res.json({
              status: "success",
              message: "user found!",
              data: { user: userInfo, token: token }
            });
          }
        } else {
          res.json({
            status: "error",
            message: "Invalid login credentials",
            data: null
          });
        }
      }
    });
  }
};

var tk = function() {
  const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
    expiresIn: "1h"
  });
  return token;
};
