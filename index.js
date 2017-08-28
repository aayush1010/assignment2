var express = require("express");
var app = express()
var moment = require("moment")

var bodyParser = require("body-parser")

app.set("view engine", "pug")

app.use("/", bodyParser.urlencoded({extended : false}));

app.use("/", express.static(__dirname + "/public"));


app.post("/submit", function(req,res){
    var fname =  req.body.firstname ;
    var lname = req.body.lastname;
    var dob = req.body.dob;

    var b_date  = moment(dob);
    var t_date = moment(new Date());
    var diff = t_date.diff(b_date, "days");
    console.log(b_date);
    console.log(t_date);
    res.render(
        "index",
        {message : "Hi " + fname + " " + lname + ", " + "you have been lived on this planet for "+ diff +" days"}
    )
});

app.listen(3000);