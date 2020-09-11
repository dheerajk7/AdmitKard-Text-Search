const express = require("express");
const router = express.Router();

//accessing API routes
router.use("/api", require("./api/index"));

module.exports = router;
