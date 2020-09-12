const express = require("express");
const router = express.Router();

const searchController = require("../../../controllers/api/v1/search_controller");

// route for getting search result
router.post("/", searchController.search);

module.exports = router;
