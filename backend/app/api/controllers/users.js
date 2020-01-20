const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  generate: function(req, res, next) {
    userModel.create(
      {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        test: req.body.test,
        testDuration: req.body.testDuration,
        questions: req.body.questions
      },
      function(err, result) {
        if (err) next(err);
        else content = {};
        content.link = `https://zecode.zessta.com/test?mode=candidate&id=${result._id}`;
        content.id = result._id;
        res.json({
          status: "success",
          message: "Link successfully generated",
          data: { content }
        });
      }
    );
  },
  getAll: function(req, res, next) {
    let userList = [];
    userModel.find({}, function(err, users) {
      if (err) {
        next(err);
      } else {
        for (let user of users) {
          userList.push({
            id: user._id,
            name: user.name,
            email: user.email,
            date: user.date,
            testDuration: user.testDuration,
            test: user.test
          });
        }
        res.json({
          status: "success",
          message: "List generated successfully!",
          data: { users: userList }
        });
      }
    });
  },
  getByMailID: function(req, res, next) {
    userModel.findOne({ email: req.body.email }, function(err, userInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "User Found",
          data: { userInfo }
        });
      }
    });
  },
  getByID: function(req, res, next) {
    userModel.findById(req.body.id, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "User Found",
          data: { user: userInfo }
        });
      }
    });
  },
  deleteById: function(req, res, next) {
    userModel.findByIdAndRemove(req.body.id, function(err, result) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Test deleted successfully!",
          data: null
        });
      }
    });
  },
  editByID: function(req, res, next) {
    userModel.findByIdAndUpdate(req.body.id, { name: req.body.name }, function(
      err,
      userInfo
    ) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "",
          data: {
            link: `https://zecode.zessta.com/test?id=${userInfo._id}&mode=candidate`
          }
        });
      }
    });
  }
};
