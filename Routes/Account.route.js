const express = require("express");
const Account = require("../Models/Accounts.model");
const router = express.Router();

// ALL ACCOUNT ROUTE
router.get("/", async (req, res, next) => {
  try {
    const result = await Account.find({}, { __v: false });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// SINGLE ACCOUNT BY ID ROUTE
router.get("/:id", async (req, res, next) => {
  try {
    const result = await Account.findById(req.params.id, { __v: false });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// CREATE ACCOUNT ROUTE
router.post("/", async (req, res, next) => {
  try {
    const account = new Account(req.body);
    const result = await account.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// UPDATE ACCOUNT BY ID ROUTE
router.patch("/:id", async (req, res, next) => {
  const updates = req.body;
  const options = { new: true };
  try {
    const result = await Account.findByIdAndUpdate(
      req.params.id,
      updates,
      options
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});
// DELETE ACCOUNT BY ID ROUTE
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Account.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
