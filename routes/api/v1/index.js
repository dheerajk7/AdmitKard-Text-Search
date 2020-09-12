const express = require("express");
const router = express.Router();

//accessing different routes files
router.use("/search", require("./search"));
router.use("/question", require("./question"));
module.exports = router;
