var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, null, {
      "Content-Type": "text/html",
    });
    res.write("<h1>Hello, world!</h1>");
    switch (req.url) {
      case "/homepage":
        res.write("Homepage");
        break;
      case "/blog":
        res.write("Blog");
      default:
        break;
    }
    res.end();
  })
  .listen(3000);
