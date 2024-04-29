const express = require("express");

const app = express();

app.use(express.static("public"));

const products = [
  { id: 0, name: "Bilgisayar" },
  { id: 1, name: "Telefon" },
  { id: 2, name: "Kulaklık" },
  { id: 3, name: "Saat" },
];

app.use("/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

app.use("/products", (req, res) => {
  res.json(products);
});

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
