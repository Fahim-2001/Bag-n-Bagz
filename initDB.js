const { default: mongoose } = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose
    .set("strictQuery", true)
    .connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB.");
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
};
