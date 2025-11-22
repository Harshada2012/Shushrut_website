import React from "react";
import "./Stats.css";

const stats = [
  { icon: "/icon/hospital-solid-full.svg", number: "50+", label: "Active Hospitals" },
  { icon: "/icon/users-solid-full.svg", number: "100+", label: "Legacy Customers"},
  { icon: "/icon/building-columns-solid-full.svg", number: "5+", label: "Medical Colleges" },
  { icon: "/icon/graduation-cap-solid-full.svg", number: "300K+", label: "Admissions Logged" },
  { icon: "/icon/heart-pulse-solid-full.svg", number: "360K+", label: "OPD Patients (YTD)"},
  { icon: "/icon/file-solid-full.svg", number: "100K+", label: "Discharge Summary" },
  { icon: "/icon/globe-solid-full.svg", number: "14+", label: "Presence Overseas" },
];

const Stats = () => {
  return (
    <section className="stats-container">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stats-box" key={index}>
            <div className="stats-icon">
              <img src={item.icon} alt="icon" />
            </div>
            <h3 className="stats-number">{item.number}</h3>
            <p className="stats-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;