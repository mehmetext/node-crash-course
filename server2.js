const express = require("express");

const app = express();

app.use("/about", (req, res) => {
  // res.send("express ile oluşan hakkımda.");
  res.json({ message: "hakkımda" });
});

app.use("/", (req, res) => {
  res.send("express ile oluşan ana sayfa.");
});

app.listen(8000, () => {
  console.log("Server çalışmaya başladı: 8000");
});
