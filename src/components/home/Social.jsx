import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa"; // Import social icons
import "./styles/Social.css"; // Import styles

const SocialMediaSection = () => {
  return (
    <section className="social-media-section">
      <div className="container">
        {/* YouTube Videos */}
        <div className="video-section">
          <h2>How MSEF Transforms Lives</h2>
          <div className="video-grid">
            {["mObq_kOe40o", "4b4hYN3O4Qk", "Ty_Ub__xrh4"].map((videoId, index) => (
              <div className="video-container" key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`MSEF Documentary ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
