const express = require("express");
const router = express.Router();
const codeLinksController = require("../app/api/controllers/codeLinks");
router.post("/addTestLinks", codeLinksController.add);
router.post("/getTestLinksByID", codeLinksController.getByID);
router.post("/editQuestionsByID", codeLinksController.editByID);
router.post("/getQuestionsArray", codeLinksController.getQuestionsArray);
router.post("/getAll", codeLinksController.getAll);
module.exports = router;
