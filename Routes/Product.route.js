const express = require("express");

const router = express.Router();

// ALL PRODUCTS ROUTE
router.get("/", async (req, res, next) => {
  res.send("Getting All Products.");
});

// GET PRODUCT BY ID
router.get("/:id", async (req, res, next) => {
  res.send("Getting a product by Id.");
});

// ADD PRODUCT ROUTE
router.post("/", async (req, res, next) => {
  res.send("Product added in DB");
});

// UPDATE PRODUCT ROUTE
router.patch("/:id", async (req, res, next) => {
  res.send("Updating a product by Id.");
});

// DELETE PRODUCT ROUTE
router.delete("/:id", async (req, res, next) => {
  res.send("Deleting a product by Id.");
});

module.exports = router;
