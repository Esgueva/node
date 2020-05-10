const express = require("express");
const app = express();
const { config } = require("../movies-api/config");

app.get("/", (req, res) => {
  res.send(
    `<h1>Introduzca un año en la URL</h1> 
    <h2>Ejemplo http:localhost:${config.port}/2020</h2>`
  );
});

app.get("/:year", (req, res) => {
  let year = req.params.year;
  let contentHTML = "";
  isNaN(year)
    ? (contentHTML = `<h1>No ha introducido un número</h1>`)
    : (contentHTML = isLeapYear(year));
  res.send(contentHTML);
});

function isLeapYear(year) {
  let msg = `El año ${year} `;
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    ? (msg += "es bisiesto")
    : (msg += "no es bisiesto");
  return `<h1>${msg}</h1>`;
}

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
