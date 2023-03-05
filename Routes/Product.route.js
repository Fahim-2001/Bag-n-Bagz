const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  getProductByCategory,
} = require("../Controllers/Product.controller");
const Product = require("../Models/Prodect.model");

const router = express.Router();

// ALL PRODUCTS ROUTE
router.get("/", getAllProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// GET PRODUCT BY CATEGORY
router.get("/category/:category", getProductByCategory);

// ADD PRODUCT ROUTE
router.post("/", addProduct);

// UPDATE PRODUCT ROUTE
router.patch("/:id", updateProductById);

// DELETE PRODUCT ROUTE
router.delete("/:id", deleteProductById);

module.exports = router;
