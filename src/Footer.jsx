import React from "react";
import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo"><img src="./logo.png"></img> Shushrut System Pvt. Ltd.</h2>
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Shushrut System Pvt. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;