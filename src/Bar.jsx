import React from "react";
import "./Bar.css";

const stats = [
  { value: "100+", label: "Professionals Doctor" },
  { value: "70+", label: "Health Department" },
  { value: "30", label: "Award Winners" },
  { value: "1000+", label: "Satisfied Patients" },
];

const Bar = () => {
  return (
    <section className="bar-section">
      <div className="bar-overlay">
        <div className="bar-grid">
          {stats.map((item, index) => (
            <div className="bar-box" key={index}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bar;