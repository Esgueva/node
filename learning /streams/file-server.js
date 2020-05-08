const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const readStream = fs.createReadStream("./big");
  readStream.pipe(res);
});

server.listen(3000);
console.log("Server: http://localhost:3000");

//curl -i localhost:3000
