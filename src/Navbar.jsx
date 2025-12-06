import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Toggles dropdown in mobile view
  const toggleDropdown = (e) => {
    if (window.innerWidth <= 900) {
      e.target.parentElement.classList.toggle("open");
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <div className="header-navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/logo.png" alt="logo" style={{ height: "50px" }} />
        <span className="nav-name">
          <b>Shushrut <span>System</span> Pvt Ltd</b>
        </span>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV MENU */}
      <nav className={`nav-content ${open ? "open" : ""}`}>
        <ul className="nav-nav">

          {/* HOME */}
          <li>
            <ScrollLink
              to="home"
              smooth duration={600}
              offset={-60}
              onClick={closeMenu}
            >
              <b>Home</b>
            </ScrollLink>
          </li>

          {/* ABOUT DROPDOWN */}
          <li className="dropdown">
            <span onClick={toggleDropdown}>
              <b>About</b> ▾
            </span>
            <ul className="dropdown-menu">
              <li>
                <ScrollLink to="about" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Leadership
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="team" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Team
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="values" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Values
                </ScrollLink>
              </li>
            </ul>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="dropdown">
            <span onClick={toggleDropdown}>
              <b>Services</b> ▾
            </span>
            <ul className="dropdown-menu">
              <li><ScrollLink to="services" smooth duration={600} offset={-60} onClick={closeMenu}>What We Offer</ScrollLink></li>
              <li><ScrollLink to="why" smooth duration={600} offset={-60} onClick={closeMenu}>Why Choose Us</ScrollLink></li>
              <li><ScrollLink to="contact" smooth duration={600} offset={-60} onClick={closeMenu}>Support</ScrollLink></li>
            </ul>
          </li>

          {/* PRODUCTS DROPDOWN */}
          {/* ABOUT DROPDOWN */}
          <li className="dropdown">
            <span className="dropdown-label" onClick={toggleDropdown}>
              <b>About</b> <span className="dropdown-arrow">▾</span>
            </span>

            <ul className="dropdown-menu">
              <li>
                <ScrollLink to="about" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Leadership →
                </ScrollLink>
              </li>

              <li>
                <ScrollLink to="team" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Team →
                </ScrollLink>
              </li>

              <li>
                <ScrollLink to="values" smooth duration={600} offset={-60} onClick={closeMenu}>
                  Values →
                </ScrollLink>
              </li>
            </ul>
          </li>
          {/* GALLERY */}
          {/* PRODUCTS DROPDOWN */}
          <li className="dropdown">
            <span className="dropdown-label" onClick={toggleDropdown}>
              <b>Products</b> <span className="dropdown-arrow">▾</span>
            </span>

            <ul className="dropdown-menu">
              <li><ScrollLink to="products" smooth duration={600} offset={-60} onClick={closeMenu}>All Products →</ScrollLink></li>
              <li><Link to="/hospital" onClick={closeMenu}>Hospital EMR →</Link></li>
              <li><Link to="/clinic" onClick={closeMenu}>Clinic EMR →</Link></li>
              <li><Link to="/diagnostic" onClick={closeMenu}>Diagnostics →</Link></li>
              <li><Link to="/medical" onClick={closeMenu}>Medical Store →</Link></li>
            </ul>
          </li>

          {/* MOBILE BUTTON */}
          <li className="mobile-btn">
            <ScrollLink to="contact" smooth duration={600} offset={-60} onClick={closeMenu}>
              <button className="nav-btn"><b>Book Demo</b></button>
            </ScrollLink>
          </li>

        </ul>
      </nav>

      {/* DESKTOP BUTTON */}
      <ScrollLink to="contact" smooth duration={600} offset={-60}>
        <button className="nav-btn desktop-btn"><b>Book Demo</b></button>
      </ScrollLink>

    </div>
  );
}