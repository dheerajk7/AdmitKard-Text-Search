const Question = require("../../../models/question");
const Tags = require("../../../models/tags");

// creating new question in database
module.exports.create = async function (request, response) {
  try {
    // creating new question
    let question = await Question.create({
      query: request.body.query,
      topic: request.body.topic,
    });
    // getting tag list from body
    let tagList = request.body.tagList;
    // for every tag list checking if tag is already created and if not created then creating new tag
    // adding question to tags queries array
    // adding tag to tags array in question
    for (let i = 0; i < tagList.length; i++) {
      tag = await Tags.findOne({ tag: tagList[i] });
      if (!tag) {
        tag = await Tags.create({ tag: tagList[i].toLowerCase() });
      }
      await tag.queries.push(question.id);
      await question.tags.push(tag.id);
      await tag.save();
      await question.save();
    }
    return response.status(200).json({
      success: true,
      message: "Query created Successfully",
    });
  } catch (err) {
    console.log(err);
    return response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
