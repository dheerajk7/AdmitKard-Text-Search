const Tags = require("../../../models/tags");

module.exports.search = async function (request, response) {
  let searchTagList = request.body.searchKey.split(" ");
  let tags = await Tags.find({ tag: { $in: searchTagList } }).populate(
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
  return response.status(200).json({
    success: true,
    message: "Result Received",
    body: {
      question: queryList,
    },
  });
};
