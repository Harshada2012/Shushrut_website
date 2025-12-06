import React from "react";
import "./Solutions5.css";
import { useNavigate } from "react-router-dom";

const solutionsData = [
  {
    icon: "/solutions_icon/hospital.png",
    title: "Hospital Software",
    desc: "Our hospital software enhances efficiency, automates workflows, manages records, and ensures seamless, secure, and patient-centric healthcare management for hospitals and clinics.",
    link: "/hospital",
  },
  {
    icon: "/solutions_icon/clinic.png",
    title: "Clinic Software",
    desc: "Our clinic software streamlines appointments, billing, records, and patient management for efficient and seamless healthcare delivery.",
    link: "/clinic",
  },
  {
    icon: "/solutions_icon/diagnostic.png",
    title: "Diagnostic Software",
    desc: "Our diagnostic software streamlines operations, test management, reporting, and billing for both individual labs and diagnostic chains.",
    link: "/diagnostic",
  },
  {
    icon: "/solutions_icon/medical.png",
    title: "Medical College Software",
    desc: "Our medical college hospital software integrates patient care, academic management, and hospital operations for seamless efficiency and improved healthcare education.",
    link: "/medical",
  },
];

export default function Solutions5() {
  const navigate = useNavigate();

  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Our Products</h2>
      <br></br>
      <br></br>
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