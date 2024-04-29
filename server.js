//request -> server -> response
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req.url:", req.url);
  switch (req.url) {
    case "/":
      res.end("ana sayfa");
      break;
    case "/about":
      res.end("hakkimda");
      break;

    default:
      res.end("404");
  }
});

server.listen(8000, () => {
  console.log("8000 portunda çalışmaya başladı.");
});
