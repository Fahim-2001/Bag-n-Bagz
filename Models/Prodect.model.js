const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category_id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  gender_category: {
    type: String,
    required: true,
  },
  bag_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: false,
  },
  img3: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("bag", ProductSchema);

module.exports = Product;
