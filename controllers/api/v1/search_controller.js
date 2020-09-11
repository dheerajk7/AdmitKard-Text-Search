const Tags = require("../../../models/tags");

module.exports.search = async function (request, response) {
  return response.status(200).json({
    success: true,
    message: "Search",
    body: {
      question: queryList,
    },
  });
};
