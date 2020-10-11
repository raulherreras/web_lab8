var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.listen(PORT, ()=> {
    console.log("Server on port " + PORT);
});
