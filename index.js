const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

//permision public
let options = {
  origin: "http://localhost:4001",
};
app.use(cors(options));

//get
app.get("/createfile", function (req, res) {
  //date and time
  let date = new Date();
  let filename =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();
  // let filename = date.getDate();
  let datetime = filename + ".txt";

  //timestamp
  let currentstamp =
    "Date-Time: " +
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    "-" +
    date.getTime(); //.toString()

  res.json(
    fs.writeFile(`./files/${datetime}`, currentstamp, function (err) {
      if (err) throw err;
    //   console.log(datetime);
      console.log("Current Timestamp file  created");
    })
  );
});

app.get("/readfile", function (req, res) {
  res.json(
    fs.readdir("./files", function (err, data) {
      if (err) throw err;
      console.log("File in Files Folder: "+data);
    })
  );
});

app.listen(4001);
