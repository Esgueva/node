const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url == "/echo") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();
        let birthday = body.split("-");
        let year = birthday[0];
        let month = birthday[1] - 1;
        let day = birthday[2];
        birthday = new Date(year, month, day).toString();
        res.end("Your birthday is: " + birthday);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8001);
console.log("Server: http://localhost:8001");
