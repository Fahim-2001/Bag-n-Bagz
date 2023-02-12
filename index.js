const express = require("express");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Initial Message
app.get("/", (req, res) => {
  res.send("Welcome to Bag n Bagz server!");
});

app.listen(port, () => {
  console.log(`Bag n Bagz server running in localhost:${port}`);
});
