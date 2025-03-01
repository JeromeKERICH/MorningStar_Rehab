import React, { use, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack"; // Ensure correct import
import "./styles/DonationPage.css";

const DonationPage = () => {
    useEffect(() => {
        scrollTo(0, 0);
         }, []);
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY; // Use Vite's way
  const [amount, setAmount] = useState(1000); // Default KES 1000
  const [donationType, setDonationType] = useState("One-Time Donation");

  const paystackConfig = {
    email: "donor@example.com", // Replace with actual donor email
    amount: amount * 100, // Convert KES to kobo
    publicKey,
    text: `Donate ${amount} KES`,
    onSuccess: (response) => alert("Donation successful!"),
    onClose: () => alert("Donation cancelled."),
  };

  return (
    <section className="donation-page">
      {/* 🌟 Aim of the Donation */}
      <div className="donation-hero">
        <h1>Support Life-Changing Rehabilitation</h1>
        <p>Your donation helps individuals recover from addiction and mental health challenges.</p>
      </div>

      {/* 🌟 Different Types of Donations */}
      <div className="donation-types">
        <h2>Choose Your Donation Type</h2>
        <select onChange={(e) => setDonationType(e.target.value)}>
          <option value="One-Time Donation">One-Time Donation</option>
          <option value="Monthly Sponsor">Monthly Sponsor</option>
          <option value="Corporate Sponsorship">Corporate Sponsorship</option>
        </select>
        <input
          type="number"
          placeholder="Enter Amount (KES)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <PaystackButton className="paystack-button" {...paystackConfig} />
      </div>

      {/* 🌟 Learn How Donations Are Used */}
      <div className="learn-donations">
        <h2>Want to Know How Your Donations Are Used?</h2>
        <Link to="/donationimpact" className="learn-more-btn">Click Here</Link>
      </div>
    </section>
  );
};

export default DonationPage;
