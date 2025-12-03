import React from "react";
import "./Solutions5.css";
import { useNavigate } from "react-router-dom";

const solutionsData = [
  {
    icon: "/solutions_icon/hospital.png",
    title: "Hospital Software",
    desc: "Automates workflows, record management & secure patient care.",
    link: "/hospital",
  },
  {
    icon: "/solutions_icon/clinic.png",
    title: "Clinic Software",
    desc: "Streamlines appointments, billing & records for clinics.",
    link: "/clinic",
  },
  {
    icon: "/solutions_icon/diagnostic.png",
    title: "Diagnostic Software",
    desc: "Manages labs, tests, reports, and billing with ease.",
    link: "/diagnostic",
  },
  {
    icon: "/solutions_icon/medical.png",
    title: "Medical College Software",
    desc: "Combines academics with hospital systems.",
    link: "/medical",
  },
];

export default function Solutions5() {
  const navigate = useNavigate();

  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Our Solutions</h2>

      <div className="solutions-grid">
        {solutionsData.map((item, index) => (
          <div
            key={index}
            className="solution-card"
            onClick={() => navigate(item.link)}
          >
            <img src={item.icon} className="solution-img" alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}