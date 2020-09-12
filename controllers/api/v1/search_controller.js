const Tags = require("../../../models/tags");
const Question = require("../../../models/question");

// searching for the question using key or question
module.exports.search = async function (request, response) {
  try {
    // splitting the input on the basis of input so that it can search for tags
    let searchTagList = request.body.searchKey.split(" ");
    let newSearchTagList = [];
    // converting tag to lowercase for better match
    // we have created this tag after coverting it to lowercase
    for (let i = 0; i < searchTagList.length; i++) {
      newSearchTagList.push(searchTagList[i].toLowerCase());
    }
    // finding match tag and getting all the questions
    let tags = await Tags.find({ tag: { $in: newSearchTagList } }).populate(
      "queries"
    );
    // getting only unique question form the result tags
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
    // if we found any query then returning that query as response
    if (queryList.length > 0) {
      return response.status(200).json({
        success: true,
        message: "Result Received",
        data: {
          questions: queryList,
        },
      });
    } else {
      // if no question found then try to find the question on questionList using the input search key
      let regEx = new RegExp(request.body.searchKey, "i");
      let question = await Question.find({
        query: { $regex: regEx }, //using regular expression to search for searchKey pattern in question
      });
      // sending response
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
