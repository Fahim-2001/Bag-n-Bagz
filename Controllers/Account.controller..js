const createHttpError = require("http-errors");
const { default: mongoose } = require("mongoose");
const Account = require("../Models/Accounts.model");

module.exports = {
  // ALL ACCOUNT FUNCTION
  getAllAccounts: async (req, res, next) => {
    try {
      const result = await Account.find({}, { __v: false });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  //   GET ACCOUNT BY ID FUNCTION
  getAccountById: async (req, res, next) => {
    try {
      const result = await Account.findById(req.params.id, { __v: false });
      //   Error if account doesn't exist
      if (!result) throw createHttpError(404, "Account does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        createHttpError(400, "Invalid Account Id!");
      }
      next(error);
    }
  },

  //   CREATE ACCOUNT BY ID
  createAccount: async (req, res, next) => {
    try {
      const account = new Account(req.body);
      const result = await account.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === "ValidationError") {
        createHttpError(422, error.message);
      }
      next(error);
    }
  },

  // UPDATE ACCOUNT BY ID
  updateAccountById: async (req, res, next) => {
    const updates = req.body;
    const options = { new: true };
    try {
      const result = await Account.findByIdAndUpdate(
        req.params.id,
        updates,
        options
      );
      //   Error if account doesn't exist
      if (!result) throw createHttpError(404, "Account does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        createHttpError(400, "Invalid Account Id!");
      }
      next(error);
    }
  },

  // DELETE ACCOUNT BY ID
  deleteAccountById: async (req, res, next) => {
    try {
      const result = await Account.findByIdAndDelete(req.params.id);
      //   Error if account doesn't exist
      if (!result) throw createHttpError(404, "Account does not exist!");
      res.send(result);
    } catch (error) {
      console.log(error.message);
      //Error message for invalid id
      if (error instanceof mongoose.CastError) {
        createHttpError(400, "Invalid Account Id!");
      }
      next(error);
    }
  },
};
