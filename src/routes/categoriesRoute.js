import express from "express";

const categoriesRoute = express.Router();

categoriesRoute.use((req, res, next) => {
  req.foo = "bar";
  console.log("CategoriesRoute Middleware");

  next();
});

categoriesRoute.get("/", (req, res) => {
  console.log("req.foo:", req.foo);

  res.send("Categories");
});

categoriesRoute.get("/electronics", (req, res) => {
  console.log("req.foo:", req.foo);

  res.send("Electronics");
});

export default categoriesRoute;
