const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");
const initDB = require("./initDB");
const ProductRoute = require("./Routes/Product.route");
const AccountRoute = require("./Routes/Account.route");
const TopProductsRoute = require("./Routes/TopProducts.route");
const HappyCustomerReviewRoute = require("./Routes/HappyCustomerReviews.route");
const app = express();
const port = process.env.PORT || 5000;

// Initialization
initDB();
// Middlewares
app.use(express.json());
app.use(cors());

// Route call
app.get("/", (req, res, next) => {
  res.send("Bag N Bagz server!");
});
app.use("/bags", ProductRoute);
app.use("/accounts", AccountRoute);
app.use("/topProducts", TopProductsRoute);
app.use("/customersReview", HappyCustomerReviewRoute);

// 404 error handler
app.use((req, res, next) => {
  next(createHttpError(404, "Page not found!"));
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// Terminal Message
app.listen(port, () => {
  console.log(`Bag N Bagz server running on port : ${port}`);
});
