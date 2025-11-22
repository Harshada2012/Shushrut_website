import React from "react";
import "./Department.css";

export default function Department() {
  const departments = [
    {
      title: "General EMR",
      icon: "/depart_icon/general.png",
    },
    {
      title: "Ophthalmology EMR",
      icon: "/depart_icon/opthalmology.png",
    },
    {
      title: "Gynaec EMR",
      icon: "/depart_icon/gyneac.png",
    },
    {
      title: "Paediatric EMR",
      icon: "/depart_icon/pediatric.png",
    },
    {
      title: "Orthopaedic EMR",
      icon: "/depart_icon/orthopaedic.png",
    },
    {
      title: "Spine & Neuro EMR",
      icon: "/depart_icon/spine and neuro.png",
    },
  ];

  return (
    <div className="department-section">
      <h2>Our Department</h2>

      <div className="dept-grid">
        {departments.map((item, index) => (
          <div className="dept-card" key={index}>
            <img src={item.icon} alt={item.title} className="dept-icon" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button className="appoint-btn">Make An Appointment</button>
    </div>
  );
}