const projectSetupModel = require("../models/projectSetup");

module.exports = {
  addProjectSetup: function(req, res, next) {
    projectSetupModel.create(
      {
        domainID: req.body.domainID,
        setup: req.body.setup
      },
      function(err, result) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Project Setup Saved Successfully",
            data: { result }
          });
        }
      }
    );
  },
  editProjectSetup: function(req, res, next) {
    projectSetupModel.findByIdAndUpdate(
      req.body.id,
      { setup: req.body.setup },
      function(err, result) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Project Setup Edited Successfully",
            data: { result }
          });
        }
      }
    );
  },
  getAll: function(req, res, next) {
    const allProjects = [];
    projectSetupModel.find({}, function(err, projects) {
      if (err) next(err);
      else {
        for (let project of projects) {
          allProjects.push({
            id: project._id,
            domainID: project.domainID,
            setup: project.setup
          });
        }
        res.json({
          status: "success",
          message: "List generated successfully!",
          data: { projects: allProjects }
        });
      }
    });
  },
  delete: function(req, res, next) {
    projectSetupModel.findOneAndDelete(
      { domainID: req.body.domainID },
      function(err, result) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Project Setup Deleted Successfully",
            data: result
          });
        }
      }
    );
  }
};
