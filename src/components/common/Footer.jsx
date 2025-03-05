import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowUp, FaMoon, FaSun, FaInstagram, FaTiktok } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/subscribe", { email });
      setMessage(res.data.message);
      setEmail(""); // Clear input
    } catch (error) {
      setMessage(error.response?.data?.message || "Subscription failed!");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/rehabilitation">Services</Link></li>
            <li><Link to="/blogsection">Blog</Link></li>
            <li><Link to="/donation">Donate</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to get the latest updates.</p>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/morningstarmsef"><FaFacebookF /></a>
            <a href="https://www.instagram.com/morningstar.foundation/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/morningstar-rehabilitation-counseling-centre/ "><FaLinkedinIn /></a>
            <a href="https://www.tiktok.com/@morningstar.foundation?is_from_webapp=1&sender_device=pc"><FaTiktok/></a>
            <a href="https://www.youtube.com/@morningstar.foundation"><FaYoutube/></a>
          </div>
        </div>
      
      </div>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 MSEF Rehabilitation & Counseling Centre. All Rights Reserved. <br></br>
        Designed by <a href="https://www.trichenest.com/">Triche Nest (Kerich)</a></p>
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
