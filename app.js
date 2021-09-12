const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1d47f431cd5781e0016399043e86fa8f&units=metric";

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(`<h1>The temperature in London is ${temp}°C</h1>`);
      res.write(`<img src=${imageURL}>`);
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("The server is running on port 3000");
});
