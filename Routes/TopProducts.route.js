const express = require("express");
const Product = require("../Models/Prodect.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await Product.find({ ratings: { $gte: 4 } }, { __v: false });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
  //   res.send("Got Top Products!!!");
});

module.exports = router;
