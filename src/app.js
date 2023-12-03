import express from "express";
import categoriesRouter from "./routes/categoriesRoute.js";
import timeMiddleware from "./middlewares/timeMiddleware.js";

const app = express();

//for public folder
app.use("/public", express("public"));

//for timeMiddleware
app.use(timeMiddleware);

//for nested router
app.use("/categories", categoriesRouter);

//for index
app.get("/", (req, res) => {
  res.send("Hello, world! (from /)");
});

app.listen(3000);
