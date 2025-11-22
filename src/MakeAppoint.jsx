import React from "react";
import "./MakeAppoint.css";

const MakeAppoint = () => {
  return (
    <section className="make-appoint-section">
      <div className="make-appoint-overlay">
        <p className="appoint-subtitle">Get a Checkup From Doctors</p>
        <h2 className="appoint-title">Make An Online Appointment?</h2>
        <p className="appoint-desc">
          Get appointments of specialist doctors: +91 99230 48739
        </p>

        <button className="appoint-btn">Book Appointment</button>
      </div>
    </section>
  );
};

export default MakeAppoint;