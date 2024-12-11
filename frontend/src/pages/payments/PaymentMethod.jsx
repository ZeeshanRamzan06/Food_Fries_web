import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../../components/CheckoutPage/CheckoutPage";
import "./paymets.css";
import { useLocation } from "react-router-dom";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

const Payments = () => {
  // Get the amount from the state passed via navigation
  const location = useLocation();
  const amount = location.state?.amount;  // Default to 40 if not passed

  const convertToSubcurrency = (amount, factor = 100) => {
    return Math.round(amount * factor);
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1>Complete Your Payment</h1>
        
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default Payments;
