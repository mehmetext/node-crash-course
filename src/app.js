const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.use((req, res, next) => {
  console.log("url:", req.url);
  console.log("time:", new Date());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world! (from /)");
});

app.listen(3000);
