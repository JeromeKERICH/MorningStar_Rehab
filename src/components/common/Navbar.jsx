import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; // Import Navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>
          MorningStar <span>Rehab & Counseling Centre</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>

        {/* Services Dropdown */}
        <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <Link to="/services">Services ▾</Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/rehabilitation">Rehabilitation</Link>
              <Link to="/services/counseling">Counseling</Link>
              <Link to="/services/wellness">Wellness</Link>
            </div>
          )}
        </div>

        
        <Link to="/blog">Blog & Resources</Link>
        <Link to="/scholarship">Scholarship</Link>
        

        {/* CTA Button */}
        <a href="tel://+254742935769" className="btn btn-primary">
          Call Us Now
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar hide" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>
    </header>
  );
};

export default Navbar;
