var http = require("http");
var url = require("url");

http
  .createServer((req, res) => {
    let q = url.parse(req.url).query;
    let str = `İsim: ${q.name}`;

    res.write(str);
    res.end();
  })
  .listen(3000);
