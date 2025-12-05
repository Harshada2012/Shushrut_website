import React from "react";
import "./Partners.css";

export default function Partners() {
  const partners = [
    { name: "Tathastu", logo: "/partners/tathastu.png" },
    { name: "Acrylic Solutions", logo: "/partners/acrylic.png" },
    { name: "Creative Clavicle", logo: "/partners/creative.png" },
    { name: "Manavi Consultancy", logo: "/partners/manavi.png" },
  ];

  return (
    <div className="partners-section">
      <h2 className="partners-title">Trusted Partners</h2>

      <div className="partners-grid">
        {partners.map((p, index) => (
          <div className="partner-card" key={index}>
            <img src={p.logo} alt={p.name} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}