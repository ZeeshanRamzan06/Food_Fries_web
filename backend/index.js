require("dotenv").config();
const express = require("express");
const cors = require("cors");
const createPaymentIntent = require("./api/create-payment-intent.js"); 

const app = express();
app.use(cors({ origin: "https://food-fries.vercel.app", methods: ['GET', 'POST'], })); 
app.use(express.json());

// Define the route
app.post("/api/create-payment-intent", createPaymentIntent);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
