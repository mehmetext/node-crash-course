var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("page.html", (err, data) => {
      // res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  })
  .listen(3000);
