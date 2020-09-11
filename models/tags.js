const mongoose = require("mongoose");

// creating employee model
const tagsSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  queries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Queries",
    },
  ],
});

const Tags = mongoose.model("Tags", tagsSchema);
module.exports = Tags;
