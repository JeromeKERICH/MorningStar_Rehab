import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; // Import Navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };


  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

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
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/aboutus" onClick={closeMenu}>About Us</Link>

        {/* Services Dropdown */}
        <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
        <button onClick={isSmallScreen ? toggleDropdown : undefined} className="dropdown-btn">
          <Link to="/services" onClick={!isSmallScreen ? undefined : toggleDropdown}>
            Services ▾
          </Link>
        </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/rehabilitation" onClick={closeMenu}>Rehabilitation</Link>
              <Link to="/services/counseling" onClick={closeMenu}>Counseling</Link>
              <Link to="/services/wellness" onClick={closeMenu}>Wellness</Link>
              <Link to="/massage" onClick={closeMenu}>Massage</Link>
            </div>
          )}
        </div>

        <Link to="/blogsection" onClick={closeMenu}>Blog & Resources</Link>
        <Link to="/scholarship" onClick={closeMenu}>Scholarship</Link>

        {/* CTA Button */}
        <a href="tel:+254742935769" className="call-us" onClick={closeMenu}>
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
