const express = require("express");
const router = express.Router();
const testCreditsController = require("../app/api/controllers/testCredits");
router.post("/saveTestCredits", testCreditsController.saveTestCredits);
router.post("/fetchUserCreditsById", testCreditsController.fetchCreditsById);
module.exports = router;
