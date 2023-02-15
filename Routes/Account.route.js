const express = require("express");
const {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccountById,
  deleteAccountById,
} = require("../Controllers/Account.controller.");
const Account = require("../Models/Accounts.model");
const router = express.Router();

// ALL ACCOUNT ROUTE
router.get("/", getAllAccounts);

// SINGLE ACCOUNT BY ID ROUTE
router.get("/:id", getAccountById);

// CREATE ACCOUNT ROUTE
router.post("/", createAccount);

// UPDATE ACCOUNT BY ID ROUTE
router.patch("/:id", updateAccountById);
// DELETE ACCOUNT BY ID ROUTE
router.delete("/:id", deleteAccountById);

module.exports = router;
