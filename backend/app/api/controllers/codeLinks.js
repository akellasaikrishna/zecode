const testLinksModel = require("../models/codeLinks");
module.exports = {
  add: function(req, res, next) {
    testLinksModel.create(
      {
        jobRoleID: req.body.jobRoleID,
        questionsArray: req.body.questionsArray
      },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Test added successfully!",
            data: { result }
          });
      }
    );
  },
  getByID: function(req, res, next) {
    testLinksModel.find({ jobRoleID: req.body.jobRoleID }, function(
      err,
      testData
    ) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Test data Found",
          data: { testData }
        });
      }
    });
  },
  getQuestionsArray: function(req, res, next) {
    const responseArray = [];
    testLinksModel.find({}, function(err, testData) {
      if (err) next(err);
      else {
        testData.map(res => {
          res["questionsArray"].map(item => {
            responseArray.push(item);
          });
        });
        res.json({
          status: "success",
          message: "Test data Found",
          data: { responseArray }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    testLinksModel.find({}, function(err, testData) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Test data Found",
          data: { testData }
        });
      }
    });
  },
  editByID: function(req, res, next) {
    testLinksModel.findOneAndUpdate(
      { jobRoleID: req.body.jobRoleID },
      { questionsArray: req.body.questionsArray },
      function(err, testData) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Test updated",
            data: { testData }
          });
        }
      }
    );
  }
};
