const express = require("express");
const createHttpError = require("http-errors");
const { default: mongoose } = require("mongoose");
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

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await HappyCustomerReview.findByIdAndDelete(req.params.id);
    //Error message if Review doesn't exist.
    if (!result) throw createHttpError(404, "Review does not exist!");
    res.send(result);
  } catch (error) {
    console.log(error.message);
    //Error message for invalid id
    if (error instanceof mongoose.CastError) {
      return next(createHttpError(400, "Invalid Review Id."));
    }
    next(error);
  }
});
module.exports = router;
