const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const Product = require("../Models/Prodect.model");

module.exports = {
  // ALL PRODUCTS FUNCTION
  getAllProducts: async (req, res, next) => {
    try {
      const result = await Product.find({}, { __v: false });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
    // res.send("Getting All Products.");
  },

  // GET PRODUCT BY ID FUNCTION
  getProductById: async (req, res, next) => {
    // res.send("Getting a product by Id.");
    try {
      const result = await Product.findById(req.params.id, { __v: false });
      //   Error if product doesn't exist
      if (!result) throw createHttpError(404, "Product Does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        next(createHttpError(400, "Invalid Product Id"));
        return;
      }
      next(error);
    }
  },

  // GET Product By Category
  getProductByCategory: async (req, res, next) => {
    const category = req.params.category;
    try {
      const result = await Product.find({ category }, { __v: false });
      //   Error if Category doesn't exist
      if (!result) throw createHttpError(404, "Category Does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid category id
      if (error instanceof mongoose.CastError) {
        next(createHttpError(400, "Invalid category"));
        return;
      }
      next(error);
    }
  },

  //   ADD PRODUCT FUNCTION
  addProduct: async (req, res, next) => {
    try {
      const product = new Product(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid property and key
      if (error.name === "ValidationError") {
        return next(createHttpError(422, error.message));
      }
      next(error);
    }
    // res.send("Product added in DB");
  },

  //   UPDATE PRODUCT FUNCTION
  updateProductById: async (req, res, next) => {
    const updates = req.body;
    const options = { new: true };
    try {
      const result = await Product.findByIdAndUpdate(
        req.params.id,
        updates,
        options
      );
      //Error message if product doesn't exist.
      if (!result) throw createHttpError(404, "Product does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        return next(createHttpError(400, "Invalid Product Id."));
      }
      next(error);
    }
    // res.send("Updating a product by Id.");
  },

  // DELETE PRODUCT FUNCTION
  deleteProductById: async (req, res, next) => {
    try {
      const result = await Product.findByIdAndDelete(req.params.id);
      //Error message if product doesn't exist.
      if (!result) throw createHttpError(404, "Product does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        return next(createHttpError(400, "Invalid Product Id."));
      }
      next(error);
    }
    // res.send("Deleting a product by Id.");
  },
};
