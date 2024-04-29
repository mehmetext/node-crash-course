const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", authRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`);
});
