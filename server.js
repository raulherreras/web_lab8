var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

var reservations = [
    {
      customerName: "John Test",
      customerEmail: "john@test.com",
      customerID: "123",
      phoneNumber: "123-456-7890",
    },
    {
      customerName: "fake person",
      customerEmail: "fake@test.com",
      customerID: "12345",
      phoneNumber: "123-456-9999",
    },
  ];

  var waitingList = [
    {
      customerName: "waiting list guy #1",
      customerEmail: "john@test.com",
      customerID: "123",
      phoneNumber: "123-456-7890",
    },
    {
      customerName: "waiting person #2",
      customerEmail: "fake@test.com",
      customerID: "12345",
      phoneNumber: "123-456-9999",
    },
  ];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList);
});

app.listen(PORT, ()=> {
  console.log("Server on port " + PORT);
});
