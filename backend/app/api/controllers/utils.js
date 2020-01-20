const utilsModel = require("../models/utils");
module.exports = {
  addUtilTest: function(req, res, next) {
    utilsModel.create(
      {
        testName: req.body.testName,
        testValue: req.body.testValue
      },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "New Test Added",
            data: { result }
          });
      }
    );
  },
  getAllUtilTests: function(req, res, next) {
    let utilTestList = [];
    utilsModel.find({}, function(err, tests) {
      if (err) {
        next(err);
      } else {
        for (let test of tests) {
          utilTestList.push({
            id: test._id,
            testName: test.testName,
            testValue: test.testValue
          });
        }
        res.json({
          status: "success",
          message: "List generated successfully!",
          data: { utilTestList }
        });
      }
    });
  },
  getUtilTestByID: function(req, res, next) {
    utilsModel.findById(req.body.id, function(err, testInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Test Found",
          data: { testInfo }
        });
      }
    });
  },
  getUtilTestByValue: function(req, res, next) {
    utilsModel.find({ testValue: req.body.testValue }, function(err, testInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Test Found",
          data: { testInfo }
        });
      }
    });
  }
};
