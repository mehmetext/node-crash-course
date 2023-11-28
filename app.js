var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, null, {
      "Content-Type": "text/html",
    });
    res.write("<h1>Hello, world!</h1>");
    res.end("end");
  })
  .listen(3000);
