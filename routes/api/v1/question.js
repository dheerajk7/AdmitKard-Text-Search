const express = require("express");
const router = express.Router();
const passport = require("passport");

const questionController = require("../../../controllers/api/v1/question_controller");

//handle company routes
// creating company
router.post("/create", questionController.create);

module.exports = router;
