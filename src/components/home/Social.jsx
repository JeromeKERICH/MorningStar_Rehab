import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Import social icons
import "./styles/Social.css"; // Import Social styles

const SocialMediaSection = () => {
  return (
    <section className="social-media-section">
      <div className="container">
        {/* YouTube Video */}
        <div className="video-wrapper">
      <h2>How MSEF Transforms Lives</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/mObq_kOe40o"
          title="MSEF Documentary"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

        {/* Follow Us Buttons */}
        <div className="social-buttons">
          <h2>Follow Us</h2>
          <div className="buttons">
            <a href="https://facebook.com/morningstarmsef" className="btn btn-primary">
              <FaFacebook className="icon" /> Facebook
            </a>
            <a href="https://www.instagram.com/morningstar.foundation/" className="btn btn-danger">
              <FaInstagram className="icon" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@morningstar.foundation?is_from_webapp=1&sender_device=pc" className="btn btn-secondary">
              <FaTiktok className="icon" /> TikTok
            </a>
            <a href="https://www.youtube.com/@morningstar.foundation" className="btn btn-secondary">YouTube</a>
            <FaYoutube className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
