const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

//using router
app.use("/", require("./routes/index.js"));

//connecting to database
const db = require("./config/mongoose");

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server");
    return;
  }
  console.log("Server is running and up at port ", port);
  return;
});
