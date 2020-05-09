const fs = require("fs");

fs.copyFile("text.txt", "text2.txt", (err) => {
  if (err) return console.log(err);
  console.log("File copy!");
});
