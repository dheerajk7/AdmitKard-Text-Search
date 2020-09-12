const express = require("express");
const router = express.Router();

const questionController = require("../../../controllers/api/v1/question_controller");
// route for creating new question
router.post("/create", questionController.create);

module.exports = router;
