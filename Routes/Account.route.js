const express = require("express");
const router = express.Router();

// ALL ACCOUNT ROUTE
router.get("/", (req, res, next) => {
  res.send("ALL ACCOUNT ROUTE");
});
// SINGLE ACCOUNT BY ID ROUTE
router.get("/:id", (req, res, next) => {
  res.send("SINGLE ACCOUNT BY ID ROUTE.");
});
// CREATE ACCOUNT ROUTE
router.post("/", (req, res, next) => {
  res.send("CREATE ACCOUNT ROUTE");
});
// UPDATE ACCOUNT BY ID ROUTE
router.patch("/:id", (req, res, next) => {
  res.send("UPDATE ACCOUNT BY ID ROUTE");
});
// DELETE ACCOUNT BY ID ROUTE
router.delete("/:id", (req, res, next) => {
  res.send("DELETE ACCOUNT BY ID ROUTE");
});

module.exports = router;
