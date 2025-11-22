import React from "react";
import "./Values4.css";

const valuesData = [
  {
    icon: "🤝",
    title: "Customer Centric",
    desc: "We align our solutions with real client needs — driven by empathy and precision.",
    color: "#1f8f3a",
  },
  {
    icon: "🧑‍💼",
    title: "Employee Empowerment",
    desc: "Our team drives our success — encouraged to own, innovate, and grow together.",
    color: "#e68a1a",
  },
  {
    icon: "💡",
    title: "Innovative & Creative",
    desc: "We fuse tech with insight to build future-ready, transformative healthcare tools.",
    color: "#1a56db",
  },
];

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Our Core Values</h2>
      <div className="underline"></div>

      <div className="values-grid">
        {valuesData.map((item, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;