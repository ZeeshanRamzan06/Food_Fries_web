import React from "react";
import { useLocation } from "react-router-dom";  // Import useLocation to access the location object
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();  // Use useLocation hook to access location object
  console.log(location)
  const amount = new URLSearchParams(location.search).get("amount");  // Access amount from the URL query parameters
  console.log(amount)
  return (
    <main className="payment-success-container">
      <div className="thank-you-message">
        <h1 className="thank-you-title">Thank you!</h1>
        <h2 className="payment-success-text">You successfully sent</h2>

        <div className="amount-box">
          ${amount}
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
