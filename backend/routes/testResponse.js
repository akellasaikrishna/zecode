const express = require("express");
const router = express.Router();
const testResponseController = require("../app/api/controllers/testResponse");
router.post("/saveTestResponse", testResponseController.saveTestResponse);
router.post("/fetchResponsesById", testResponseController.fetchResponsesById);
module.exports = router;
