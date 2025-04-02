import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack"; // Ensure correct import
import "./styles/DonationPage.css";

const Donation = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [donorName, setDonorName] = useState(""); // Donor name for thank you modal
  const [email, setEmail] = useState(""); // User email
  const [amount, setAmount] = useState(500); // Default 1000 KES
  const [donationType, setDonationType] = useState("One-Time Donation");

  // Handle Paystack Payment Configuration
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY; // Load Paystack Public Key from .env

  const paystackConfig = {
    publicKey,
    email,
    amount: amount * 100, // Convert KES to kobo
    currency: "KES",
    reference: `donation_${Date.now()}`,
    onSuccess: (response) => {
      setShowModal(true); // Show thank you modal on success
      setDonorName(donorName); // Set donor name in modal
      setEmail(""); // Clear email input
      setAmount(500); // Reset amount to default
    },
    onClose: () => alert("Donation cancelled."),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="donation-page">
      {/* 🌟 Hero Section */}
      <div className="donation-hero">
        <h1>Support Life-Changing Rehabilitation</h1>
        <p>Your donation helps individuals recover from addiction and mental health challenges.</p>
      </div>

      {/* 🌟 Donation Type Selection */}
      <div className="donation-types">
        <h2>Choose Your Donation Type</h2>
        <select onChange={(e) => setDonationType(e.target.value)} value={donationType}>
          <option value="One-Time Donation">One-Time Donation</option>
          <option value="Monthly Sponsor">Monthly Sponsor</option>
          <option value="Corporate Sponsorship">Corporate Sponsorship</option>
        </select>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter Amount (KES)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="1"
        />

        {/* Paystack Button */}
        <PaystackButton 
          className="paystack-button" 
          {...paystackConfig} 
          text="Donate Now" 
        />
      </div>

      {/* 🌟 Learn More About Donations */}
      <div className="learn-donations">
        <h2>Want to Know How Your Donations Are Used?</h2>
        <Link to="/donationimpact" className="learn-more-btn">Click Here</Link>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="thank-you-modal">
          <div className="modal-content">
            <h2>Thank You, {donorName}!</h2>
            <p>Your donation of KES {amount} is greatly appreciated. You are helping make a life-changing difference!</p>
            <p>We will keep you updated on how your donation is being used. Stay connected:</p>
            <ul>
             
              <li><a href="https://whatsapp.com/channel/0029Vb2R89b0rGiQrD2Vsl16">Join WhatsApp Updates</a></li>
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donation;
