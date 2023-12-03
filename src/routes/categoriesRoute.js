const express = require("express");

const categoriesRoute = express.Router();

categoriesRoute.get("/", (req, res) => {
  res.send("Categories");
});

categoriesRoute.get("/electronics", (req, res) => {
  res.send("Electronics");
});

module.exports = categoriesRoute;
