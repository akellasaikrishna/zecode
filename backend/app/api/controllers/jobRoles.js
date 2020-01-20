const jobRolesModel = require("../models/jobRoles");

module.exports = {
  addNewJobRole: function(req, res, next) {
    jobRolesModel.create(
      {
        jobRoleID: req.body.jobRoleID,
        jobRoleTitle: req.body.jobRoleTitle
      },
      function(err, result) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Job Role Added",
            data: { result }
          });
        }
      }
    );
  },
  getAllJobRoles: function(req, res, next) {
    jobRolesModel.find({}, function(err, result) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "List Generated",
          data: { result }
        });
      }
    });
  }
};
