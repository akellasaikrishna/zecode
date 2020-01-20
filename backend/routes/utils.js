const express = require("express");
const router = express.Router();
const utilsController = require("../app/api/controllers/utils");
router.post("/addUtilTest", utilsController.addUtilTest);
router.get("/getAllUtilTests", utilsController.getAllUtilTests);
router.post("/getUtilTestByID", utilsController.getUtilTestByID);
router.post("/getUtilTestByValue", utilsController.getUtilTestByValue);
module.exports = router;
