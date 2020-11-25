var router = require("express").Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login Page" });
});

router.post("/signup", (req, res) => {
  res.json({ message: "Signup Page" });
});

module.exports = router;
