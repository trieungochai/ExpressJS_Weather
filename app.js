const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1d47f431cd5781e0016399043e86fa8f&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });

  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("The server is running on port 3000");
});
