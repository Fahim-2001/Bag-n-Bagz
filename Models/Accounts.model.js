const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
});

const Account = mongoose.model("account", AccountSchema);

module.exports = Account;
