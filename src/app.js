const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, world! (from /)");
});

app.listen(3000);
