const mongoose = require("mongoose");

// creating queriesSchema model to store queries
const queriesSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tags" }], //storing all the reference of tag under these query
});

const Queries = mongoose.model("Queries", queriesSchema);
module.exports = Queries;
