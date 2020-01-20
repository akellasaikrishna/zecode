const express = require("express");
const router = express.Router();
const jobRoleController = require("../app/api/controllers/jobRoles");
router.post("/addNewJobRole", jobRoleController.addNewJobRole);
router.post("/getAllJobRoles", jobRoleController.getAllJobRoles);
module.exports = router;
