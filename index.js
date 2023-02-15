const express = require("express");
const createHttpError = require("http-errors");
const initDB = require("./initDB");
const ProductRoute = require("./Routes/Product.route");
const AccountRoute = require("./Routes/Account.route");
const app = express();
const port = process.env.PORT || 5000;

// Initialization
initDB();
// Middlewares
app.use(express.json());

// Route call
app.get("/", (req, res, next) => {
  res.send("Bag N Bagz server!");
});
app.use("/bags", ProductRoute);
app.use("/accounts", AccountRoute);

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
