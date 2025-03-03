import React from "react";
import "./styles/About.css"; // Import the styles
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Right Side - Content (Comes First on Small Screens) */}
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            MSEF Rehabilitation & Counseling Centre is a holistic organization
            dedicated to helping individuals overcome alcohol and substance
            abuse through expert counseling, rehabilitation, and support
            programs.
          </p>

          {/* Centered CTA Button */}
          <div className="about-cta">
            <Link to="/aboutus" className="btn btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Left Side - Image (Comes Second on Small Screens) */}
        <div className="about-image">
          <img src="/assets/main.jpg" alt="About MSEF" />
        </div>
      </div>
    </section>
  );
};

export default About;
