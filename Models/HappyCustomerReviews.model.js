const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerReviewSchema = new Schema({
  customer_name: {
    type: String,
    required: true,
  },

  customer_email: {
    type: String,
    required: true,
  },

  customer_img: {
    type: String,
    required: true,
  },

  customer_review: {
    type: String,
    required: true,
  },
});

const HappyCustomerReview = mongoose.model(
  "happy_customer_review",
  CustomerReviewSchema
);

module.exports = HappyCustomerReview;
