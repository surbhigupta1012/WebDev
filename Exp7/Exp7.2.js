var express = require('express');
var app = express();

var developers = [
{ name: "adam", age: "25", dept: "IT", salary: "90,0000"},
{ name: "charles", age: "23", dept: "Marketting", salary: "75,0000"},
{ name: "david", age: "35", dept: "finance", salary: "30,0000"},
{ name: "john", age: "40", dept: "HR", salary: "40,0000"},
{ name: "smith", age: "24", dept: "Advertising", salary: "20,0000"}
 ]

app.get("/developer", function (req, res) {
    res.json(developers);
});

app.get("/developer/:index", function (req, res) {
    var idx = req.params['index'];
    res.json(developers[idx]);
});


app.listen(3000);