const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");

router.get("/all-questions", authMiddleware, (req, res) => {
  res.send("all questions route");
});
module.exports = router;
