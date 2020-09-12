const mongoose = require("mongoose");

// creating tags schema which have reference of all the question that belongs to one tag
const tagsSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  queries: [
    {
      type: mongoose.Schema.Types.ObjectId, //reference of question
      ref: "Queries",
    },
  ],
});

const Tags = mongoose.model("Tags", tagsSchema);
module.exports = Tags;
