const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
} = require("../Controllers/Product.controller");

const router = express.Router();

// ALL PRODUCTS ROUTE
router.get("/", getAllProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// ADD PRODUCT ROUTE
router.post("/", addProduct);

// UPDATE PRODUCT ROUTE
router.patch("/:id", updateProductById);

// DELETE PRODUCT ROUTE
router.delete("/:id", deleteProductById);

module.exports = router;
