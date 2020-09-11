const mongoose = require("mongoose");

// creating company model
const queriesSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tags" }],
});

const Queries = mongoose.model("Queries", queriesSchema);
module.exports = Queries;
