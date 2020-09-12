const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// using cors to allow cross origin access for API calls
app.use(cors());
// body parser to parse JSON form data
app.use(bodyParser.json());
// body parset to parse urlencoded form data
app.use(bodyParser.urlencoded({ extended: false }));

//using router
app.use("/", require("./routes/index.js"));

//connecting to database
const db = require("./config/mongoose");

// running server on specified port
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server");
    return;
  }
  console.log("Server is running and up at port ", port);
  return;
});
