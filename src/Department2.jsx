import React from "react";
import "./Department.css";

export default function Department() {
    const departments = [
        {
            title: "Orthopaedic EMR",
            icon: "/depart_icon/orthopaedic.png",
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
            title: "Homeopathic EMR",
            icon: "/depart_icon/homeopathy.png",
        },

        {
            title: "Ophthalmology EMR",
            icon: "/depart_icon/opthalmology.png",
        },
        {
            title: "ENT EMR",
            icon: "/depart_icon/ent.jpeg",
        },
        {
            title: "One Page EMR",
            icon: "/depart_icon/general.png",
        },
    ];

    return (
        <div className="department-section">
            <h3>Our EMR Medical Records</h3>

            <div className="dept-grid">
                {departments.map((item, index) => (
                    <div className="dept-card" key={index}>
                        <div className="dept-content">
                            <img src={item.icon} alt={item.title} className="dept-icon" />
                            <p className="dept-title">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="appoint-btn">Make An Appointment</button>
        </div>
    );
}