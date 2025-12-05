import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className="header-navbar">

      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="logo" style={{ height: "50px" }} />
        <span className="nav-name">
          <b>Shushrut <span>System</span> Pvt Ltd</b>
        </span>
      </div>

      {/* Desktop + Mobile Navigation */}
      <nav className={`nav-content ${open ? "open" : ""}`}>
        <ul className="nav-nav">

          <li>
            <ScrollLink to="home" smooth duration={600} offset={-60} onClick={closeMenu}>
              <b>Home</b>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="about" smooth duration={600} offset={-60} onClick={closeMenu}>
              <b>About</b>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="services" smooth duration={600} offset={-60} onClick={closeMenu}>
              <b>Services</b>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="products" smooth duration={600} offset={-60} onClick={closeMenu}>
              <b>Products</b>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="gallery" smooth duration={600} offset={-60} onClick={closeMenu}>
              <b>Gallery</b>
            </ScrollLink>
          </li>

          <li className="mobile-btn">
            <ScrollLink to="contact" smooth duration={600} offset={-60} onClick={closeMenu}>
              <button className="nav-btn"><b>Book Appointment</b></button>
            </ScrollLink>
          </li>

        </ul>
      </nav>

      {/* Desktop Button (stays aligned as before) */}
      <ScrollLink to="contact" smooth duration={600} offset={-60}>
        <button className="nav-btn desktop-btn"><b>Book Appointment</b></button>
      </ScrollLink>

      {/* Hamburger Icon (Mobile only) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

    </div>
  );
}