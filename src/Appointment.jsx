import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="appointment-section">

      <div className="appointment-left">
        <img 
          src="/demo.jpg" 
          alt="Doctors" 
          className="appointment-image"
        />
      </div>

      <div className="appointment-right">
        <p className="appointment-subtitle">Demo Appointment</p>
        <h2 className="appointment-title">Make An Appointment</h2>

        <form className="appointment-form">

          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Your Phone" />
            <input type="date" placeholder="Schedule Date" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button className="appointment-btn">Book Appointment</button>
        </form>
      </div>

    </section>
  );
};

export default Appointment;