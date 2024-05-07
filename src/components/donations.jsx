// DonationPage.js

import React from "react";
import "../css/donation.css";

const DonationPage = () => {
  return (
    <div className="donation-page">
      <h1>Donate Now</h1>
      <div className="donation-info">
        <h2>How Donations are Used:</h2>
        <p>
          Your donations support our organization in various ways, including but
          not limited to:
        </p>
        <ul>
          <li>Providing food, shelter, and healthcare for those in need</li>
          <li>Supporting educational programs for underprivileged children</li>
          <li>Advocating for environmental conservation and sustainability</li>
        </ul>
      </div>
      <div className="payment-options">
        <div className="payment-option">
          <h2>Credit/Debit Card</h2>
          <form>
            {/* Credit/Debit Card Form Fields */}
            <label>
              Card Number:
              <input type="text" placeholder="Enter card number" />
            </label>
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YYYY" />
            </label>
            <label>
              CVV:
              <input type="text" placeholder="Enter CVV" />
            </label>
            <button type="submit">Pay Now</button>
          </form>
        </div>
        <div className="payment-option">
          <h2>Bank Transfer</h2>
          <p>Here are our bank details:</p>
          <p>Bank Name: Example Bank</p>
          <p>Account Number: 123456789</p>
          <p>IFSC Code: XXXX1234</p>
        </div>
        <div className="payment-option">
          <h2>UPI Payment</h2>
          <p>
            Scan the QR code or use the following UPI ID to make the payment:
          </p>
          <p>Example UPI ID: example@upi</p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
