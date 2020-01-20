const testCreditsModel = require("../models/testCredits");

module.exports = {
  saveTestCredits: function(req, res, next) {
    testCreditsModel.create(
      {
        id: req.body.id,
        testCredits: req.body.testCredits,
        testComments: req.body.testComments
      },
      (err, result) => {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Credits Saved Successfully",
            data: { result }
          });
        }
      }
    );
  },
  fetchCreditsById: function(req, res, next) {
    testCreditsModel.find({ id: req.body.id }, function(err, result) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Credits Found",
          data: { result }
        });
      }
    });
  }
};
