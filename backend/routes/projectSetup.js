const express = require("express");
const router = express.Router();
const projectSetupController = require("../app/api/controllers/projectSetup");
router.post("/addProjectSetup", projectSetupController.addProjectSetup);
router.post("/editProjectSetup", projectSetupController.editProjectSetup);
router.post("/getAll", projectSetupController.getAll);
router.post("/delete", projectSetupController.delete);
module.exports = router;
