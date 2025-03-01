import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./styles/Donate.css"; // Import Donate styles

const DonateSection = () => {
  return (
    <section className="donate-section gradient-navy-gold">
      <div className="donate-content">
        <h2>You Can Help Transform Lives</h2>
        <p>
          Your donation provides rehabilitation, counseling, and support for
          those in need. Every contribution makes a difference.
        </p>

        {/* Donation Methods */}
        <div className="donation-methods">
          <div className="donation-box">
            <span>💳</span>
            <p>Credit/Debit Card</p>
          </div>
          <div className="donation-box">
            <span>📱</span>
            <p>M-Pesa</p>
          </div>
          <div className="donation-box">
            <span>💰</span>
            <p>Bank Transfer</p>
          </div>
        </div>

        {/* Donate Button */}
        <Link to="donation" className="btn btn-primary">
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
