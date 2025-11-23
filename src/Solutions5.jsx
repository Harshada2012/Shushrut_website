import React from "react";
import "./Solutions5.css";

const solutionsData = [
  {
    icon: "/solutions_icon/hospital.png",
    title: "Hospital Software",
    desc: "Automates workflows, record management & secure patient care.",
  },
  {
    icon: "/solutions_icon/clinic.png",
    title: "Clinic Software",
    desc: "Streamlines appointments, billing & records for clinics.",
  },
  {
    icon: "/solutions_icon/diagnostic.png",
    title: "Diagnostic Software",
    desc: "Manages labs, tests, reports, and billing with ease.",
  },
  {
    icon: "/solutions_icon/medical.png",
    title: "Medical College Software",
    desc: "Combines academics with hospital systems.",
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
            <img src={item.icon} className="solution-img" alt={item.title} />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions5;