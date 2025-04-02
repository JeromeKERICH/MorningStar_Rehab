import React from "react";
import { Link } from "react-router-dom";
import "./styles/Donate.css";
import { FaCcVisa, FaCcMastercard, FaMobileAlt } from "react-icons/fa";

const DonateSection = () => {
  return (
    <section className="donate-section gradient-navy-gold">
      <div className="donate-content">
        <h1>You Can Help Transform Lives</h1>
        <p>
          Your donation provides rehabilitation, counseling, and support for
          those in need. Every contribution makes a difference.
        </p>

        {/* Payment Options */}
        <div className="payment-methods">
          <div className="payment-option">
            <FaMobileAlt className="payment-icon" />
            <span>M-Pesa</span>
          </div>
          <div className="payment-option">
            <FaCcVisa className="payment-icon" />
            <span>Visa</span>
          </div>
          <div className="payment-option">
            <FaCcMastercard className="payment-icon" />
            <span>MasterCard</span>
          </div>
        </div>

        {/* Donate Button */}
        <Link to="/donation" className="btn btn-primary">
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
