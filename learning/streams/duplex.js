const { Duplex } = require("stream");

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
  },
  read(size) {
    if (this.curretnCharCode > 90) {
      this.push(null);
      return;
    }
    this.push(String.fromCharCode(this.curretnCharCode++));
  },
});

duplexStream.curretnCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);
