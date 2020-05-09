const fs = require("fs");

fs.mkdir("test/folder/subfolder", { recursive: true }, (err) => {
  if (err) return console.log(err);
});
