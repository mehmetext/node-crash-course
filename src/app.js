const express = require("express");
const categoriesRouter = require("./routes/categoriesRoute");
const app = express();

//for public folder
app.use("/public", express.static("public"));

//for timeMiddleware
app.use(require("./middlewares/timeMiddleware"));

//for nested router
app.use("/categories", categoriesRouter);

//for index
app.get("/", (req, res) => {
  res.send("Hello, world! (from /)");
});

app.listen(3000);
