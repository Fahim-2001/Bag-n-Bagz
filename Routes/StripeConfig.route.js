const express = require("express");
const stripe = require("stripe");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const configs = {
      pk: process.env.STRIPE_PK,
      sk: process.env.STRIPE_SK,
    };
    res.send(configs);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "dollar",
      ammount: 200,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({ clientSecret: paymentIntent.clientSecret });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
