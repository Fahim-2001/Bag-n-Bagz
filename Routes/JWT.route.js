const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    // console.log({ token });
    res.send({ email: user.email, token });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
