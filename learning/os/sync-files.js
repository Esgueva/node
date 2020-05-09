const fs = require("fs");
//node sync-files.js text.txt

function countLinesSync() {
  try {
    let file = process.argv[2];
    let lines = fs.readFileSync(file).toString().split("\n").length;
    console.log(lines);
  } catch (err) {
    console.log(err);
  }
}

function countLinesAsync() {
  let file = process.argv[2];
  if (!file) throw new Error("Debes indicar la ruta del archivo.");
  let content = fs.readFile(file, (err, content) => {
    if (err) return console.log(err);
    let lines = content.toString().split("\n").length;
    console.log(lines);
  });
}

countLinesSync();
countLinesAsync();
