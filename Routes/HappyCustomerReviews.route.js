const express = require("express");
const HappyCustomerReview = require("../Models/HappyCustomerReviews.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await HappyCustomerReview.find({}, { __v: false });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const CustomerReview = new HappyCustomerReview(req.body);
    const result = await CustomerReview.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    //Error message for invalid property and key
    if (error.name === "ValidationError") {
      return next(createHttpError(422, error.message));
    }
    next(error);
  }
});

module.exports = router;
