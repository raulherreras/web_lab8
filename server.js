// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations and waiting list (DATA)
var reservations = [
    {
      customerName: "John Test",
      customerEmail: "john@test.com",
      customerID: "123",
      phoneNumber: "123-456-7890"
    },
    {
      customerName: "fake person",
      customerEmail: "fake@test.com",
      customerID: "12345",
      phoneNumber: "123-456-9999"
    },
  ];

  var waitingList = [
    {
      customerName: "waiting list guy #1",
      customerEmail: "john@test.com",
      customerID: "123",
      phoneNumber: "123-456-7890"
    },
    {
      customerName: "waiting person #2",
      customerEmail: "fake@test.com",
      customerID: "12345",
      phoneNumber: "123-456-9999"
    },
  ];

// Adds 1 to counter every time an HTML page is visited
var visitCounter = 0;

// Routes

app.get("/", function(req, res) {
  visitCounter++;
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  visitCounter++;
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  visitCounter++;
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList);
});

app.get("/api/visitCounter", function(req, res) {
  return res.send(visitCounter.toString());
});

// Adds a new reservation. Returns true if a table was available, false if not
app.post("/api/reserve", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  
  var tableAvailable;
  if (reservations.length < 5) {
    reservations.push(newReservation);
    tableAvailable = true;
  }
  else {
    waitingList.push(newReservation);
    tableAvailable = false;
  }
  console.log(tableAvailable);
  return res.json(tableAvailable);
});

app.post("/api/clearReservations", function(req, res) {
  reservations = [];
  waitingList = [];
  console.log("Cleared all reservations.")
  return res.json(true);
});

// Starts the server to begin listening
app.listen(PORT, ()=> {
  console.log("Server on port " + PORT);
});
