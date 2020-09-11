const express = require("express");
const router = express.Router();

//accessing employee related routes
router.use("/search", require("./search"));
router.use("/question", require("./question"));
module.exports = router;
