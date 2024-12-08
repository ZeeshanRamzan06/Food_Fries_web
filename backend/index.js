require("dotenv").config();
const Stripe = require("stripe");
const cors = require('cors');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
