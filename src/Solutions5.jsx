import React from "react";
import "./Solutions5.css";

const solutionsData = [
  {
    icon: "🏥",
    title: "Hospital Software",
    desc: "Automates workflows, record management & secure patient care.",
    color: "#d86e01",
  },
  {
    icon: "👨‍⚕️",
    title: "Clinic Software",
    desc: "Streamlines appointments, billing & records for clinics.",
    color: "#d86e01",
  },
  {
    icon: "❤️",
    title: "Diagnostic Software",
    desc: "Manages labs, tests, reports, and billing with ease.",
    color: "#d86e01",
  },
  {
    icon: "⚙️",
    title: "Medical College Software",
    desc: "Combines academics with hospital systems.",
    color: "#d86e01",
  },
];

const Solutions5 = () => {
  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Our Solutions</h2>
      <p className="solutions-subtitle">
        Integrated, intuitive, and intelligent software built for the evolving
        healthcare ecosystem.
      </p>

      <div className="solutions-grid">
        {solutionsData.map((item, index) => (
          <div className="solution-card" key={index}>
            <div className="solution-icon" style={{ color: item.color }}>
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

export default Solutions5;