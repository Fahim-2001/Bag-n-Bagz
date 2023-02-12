const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uue1axy.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const bagsCollection = client.db("bag-n-bagz").collection("all-bags");

    // All bags Data
    app.get("/bags", async (req, res) => {
      const query = {};
      const cursor = await bagsCollection.find(query);
      const bags = await cursor.toArray();
      res.send(bags);
    });

    // Single Bag
    app.get("/bags/:id", async (req, res) => {
      const id = req.params.id;
      // const query = { _id: new ObjectId(id) };
      const query = {};
      const cursor = await bagsCollection.find(query).toArray();
      const bag = await cursor.find((n) => n.id == id);
      res.send(bag);
    });
    // Category-based data load.
    app.get("/bags/:category", async (req, res) => {
      const category = req.params.category;
      const query = {};
      const cursor = await bagsCollection.find(query).toArray();
      const categorised_bags = cursor.filter((n) => n.category == category);
      res.send(categorised_bags);
    });
  } finally {
  }
}
run().catch((e) => console.log(e));
