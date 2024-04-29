const express = require("express");
const { register } = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/signout", authMiddleware, (req, res) => {
  res.json({ message: "çıkış yapıldı" });
});

module.exports = router;
