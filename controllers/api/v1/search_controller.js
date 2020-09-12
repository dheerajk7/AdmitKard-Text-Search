const Tags = require("../../../models/tags");
const Question = require("../../../models/question");

module.exports.search = async function (request, response) {
  try {
    let searchTagList = request.body.searchKey.split(" ");
    let newSearchTagList = [];
    for (let i = 0; i < searchTagList.length; i++) {
      newSearchTagList.push(searchTagList[i].toLowerCase());
    }
    let tags = await Tags.find({ tag: { $in: newSearchTagList } }).populate(
      "queries"
    );
    var querySetId = new Set();
    let queryList = [];
    for (let tag of tags) {
      for (let query of tag.queries) {
        if (!querySetId.has(query._id)) {
          queryList.push(query);
          querySetId.add(query._id);
        }
      }
    }
    if (queryList.length > 0) {
      return response.status(200).json({
        success: true,
        message: "Result Received",
        data: {
          questions: queryList,
        },
      });
    } else {
      let regEx = new RegExp(request.body.searchKey, "i");
      let question = await Question.find({
        query: { $regex: regEx },
      });
      return response.status(200).json({
        success: true,
        message: "Question Received",
        data: {
          questions: question,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
