import React from "react";
import "./Values4.css";

export default function Values4() {
  const values = [
    {
      title: "Customer Centric",
      desc: "We align our solutions with real client needs — driven by empathy and precision.",
      icon: "/values_icon/1st.png",
    },
    {
      title: "Employee Empowerment",
      desc: "Our team drives our success — encouraged to own, innovate, and grow together.",
      icon: "/values_icon/2nd.png",
    },
    {
      title: "Innovative & Creative",
      desc: "We fuse tech with insight to build future-ready, transformative healthcare tools.",
      icon: "/values_icon/3rd.png",
    },
  ];

  return (
    <div className="values-section">
      <h2 className="values-title">Our Core Values</h2>

      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <img src={v.icon} className="value-icon" alt={v.title} />

            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}