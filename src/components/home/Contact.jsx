import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>MSEF Rehabilitation & Counseling Centre, [Location]</p>
            </div>

            <div className="contact-item">
              <FaPhone className="icon" />
              <p>(+254) 742 935 769</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p>info@msefrehab.org</p>
            </div>

            <a href="https://wa.me/254742935769" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaWhatsapp className="icon" /> WhatsApp Chat
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Map - Live Directions */}
        <div className="google-map">
          <iframe
            title="MSEF Location"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=MSEF+Rehabilitation+&+Counseling+Centre"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Live Chat Placeholder */}
        <div className="live-chat">
          <p>💬 Need Quick Help? <span className="chat-link">Start Live Chat</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
