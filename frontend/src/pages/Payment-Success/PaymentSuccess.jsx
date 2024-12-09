import React from "react";
import './PaymentSuccess.css'
const PaymentSuccess = ({ searchParams }) => {
  const { amount } = searchParams;

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
