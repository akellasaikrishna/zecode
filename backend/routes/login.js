const express = require("express");
const router = express.Router();
const loginController = require("../app/api/controllers/login");
router.post("/create", loginController.create);
router.post("/authenticate", loginController.authenticate);
module.exports = router;
