import React from "react";
import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo">
                        <img src="./logo.png" alt="" />
                        Shushrut System Pvt. Ltd.
                    </h2>
                    <p>
                        Delivering smart, secure, and scalable healthcare IT solutions
                        to hospitals, clinics, diagnostics, and medical institutions
                        across India and abroad.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><IoCall className="icon" /> +91 99230 48739</p>
                    <p><IoMail className="icon" /> ceodesk@shushrut.com</p>
                    <p><IoLocationSharp className="icon" /> Maharashtra, India</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><ScrollLink to="home" smooth duration={600} offset={-60}>Home</ScrollLink></li>
                        <li><ScrollLink to="about" smooth duration={600} offset={-60}>About</ScrollLink></li>
                        <li><ScrollLink to="products" smooth duration={600} offset={-60}>Products</ScrollLink></li>
                        <li><ScrollLink to="gallery" smooth duration={600} offset={-60}>Gallery</ScrollLink></li>
                        <li><ScrollLink to="why" smooth duration={600} offset={-60}>Achievements</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth duration={600} offset={-60}>Contact</ScrollLink></li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <a
                        href="https://www.facebook.com/profile.php?id=61581842580905"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/padmabhushan-deshpande/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Shushrut System Pvt. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;