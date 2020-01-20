const testResponseModel = require("../models/testResponse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  saveTestResponse: function(req, res, next) {
    testResponseModel.create(
      {
        id: req.body.id,
        codeResponses: req.body.codeResponses
      },
      function(err, result) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Test Completed Successfully",
            data: { result }
          });
        }
      }
    );
  },
  fetchResponsesById: function(req, res, next) {
    testResponseModel.find({ id: req.body.id }, function(err, responseData) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Test response found",
          data: { responseData }
        });
      }
    });
  }
};
