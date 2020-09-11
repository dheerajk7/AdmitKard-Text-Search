const express = require("express");
const router = express.Router();

const searchController = require("../../../controllers/api/v1/search_controller");

//handle employee routes
// creating employee
router.post("/", searchController.search);

module.exports = router;
