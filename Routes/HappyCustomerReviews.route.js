const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("Got Happy Customer's Review!!!");
});

router.post("/", async (req, res, next) => {
  res.send("Posted New Review!!!");
});

module.exports = router;
