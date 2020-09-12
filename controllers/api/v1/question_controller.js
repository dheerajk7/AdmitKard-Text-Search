const Question = require("../../../models/question");
const Tags = require("../../../models/tags");

module.exports.create = async function (request, response) {
  try {
    console.log(request.body);
    let question = await Question.create({
      query: request.body.query,
      topic: request.body.topic,
    });
    let tagList = request.body.tagList;
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
