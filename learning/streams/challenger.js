const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, callback) {
    let data = chunk.toString();
    this.push(camel1(data));
    this.push(camel2(data));
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);

function camel1(text) {
  let data = text.toLowerCase().split(" ");
  let response = "";
  for (let x = 0; x < textArray.length; x++) {
    let word = data[x].toString();
    let size = word.length();
    let firstLetter = word.substring(0, 1).toUpperCase();
    let restOfWords = word.substring(1, size);
    response += firstLetter + restOfWords;
  }

  return response;
}

function camel2(text) {
  let response = "";
  let textToCamel = text.toLowerCase().split(" ");
  textToCamel = textToCamel.map((word) => {
    let firstLetter = word.trim().charAt(0).toUpperCase();
    let restOfWords = word.slice(1);
    response += firstLetter + restOfWords;
  });

  return response;
}
