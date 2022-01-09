const fs=require("fs");
const express = require("express");
const app = express();
const cors= require("cors");

//date and time
let date = new Date();
let filename = ((date.getDate())+"-"+(date.getMonth()+1)+"-"+(date.getFullYear())+"-"+(date.getHours())+"-"+(date.getMinutes())+"-"+(date.getSeconds()));
// let filename = date.getDate();
let datetime = (filename+".txt")

//timestamp
let currentstamp = ("Date-Time: "+(date.getDate())+"-"+(date.getMonth()+1)+"-"+(date.getFullYear())+"-"+(date.getTime()));   //.toString()

//permision public
let options = {
    origin:"http://localhost:4001"
}
app.use(cors(options))

//get 
app.get("/date-time", function (req, res) {
    res.json(
        fs.writeFile(datetime,currentstamp,function(err){
            if(err) throw err;
            console.log("Current Timestamp file  created");
        })
    )
})


app.listen(4001)