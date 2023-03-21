const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const initDB = require("./initDB");
const ProductRoute = require("./Routes/Product.route");
const AccountRoute = require("./Routes/Account.route");
const TopProductsRoute = require("./Routes/TopProducts.route");
const HappyCustomerReviewRoute = require("./Routes/HappyCustomerReviews.route");
const JWT_Route = require("./Routes/JWT.route");
const StripeConfig = require("./Routes/StripeConfig.route");
const app = express();
const port = process.env.PORT || 5000;

// Initialization
initDB();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Route call
app.get("/", (req, res, next) => {
  res.send("Bag N Bagz server!");
});
app.use("/bags", ProductRoute);
app.use("/accounts", AccountRoute);
app.use("/topProducts", TopProductsRoute);
app.use("/customersReview", HappyCustomerReviewRoute);
app.use("/jwt", JWT_Route);
app.use("/configs", StripeConfig);

// 404 error generator
app.use((req, res, next) => {
  next(createHttpError.NotFound("Page Not Found!"));
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
