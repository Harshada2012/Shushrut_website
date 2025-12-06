import React from "react";
import "./ProductsIntro.css";
import { useNavigate } from "react-router-dom";

export default function ProductsIntro() {
  const navigate = useNavigate();

  return (
    <section className="products-intro-section">

      <div className="products-intro-content">

        {/* LEFT SIDE TEXT */}
        <div className="intro-text">
          <h2 className="intro-title">Our Healthcare Solutions</h2>

          <p className="intro-desc">
            We deliver integrated healthcare software for hospitals, medical
            colleges, clinics, and diagnostic centers. Our solutions simplify
            workflows, improve patient care, automate records, and ensure
            smooth, secure, and efficient management across all healthcare
            environments.
          </p>

          {/* ⭐ Explore Button — Opens NEW PAGE ⭐ */}
          <button 
            className="intro-btn"
            onClick={() => navigate("/solutions")}
          >
            Explore Our Products
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="intro-image">
          <img src="/_.jpeg" alt="Healthcare" />
        </div>

      </div>
    </section>
  );
}