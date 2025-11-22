import React from "react";
import "./WhyChooseUs.css";

const features = [
    "Enhanced Operational Efficiency",
    "Seamless Patient Management",
    "Improved Data Accuracy & Security",
    "Scalable for Single or Multi-location",
    "Better Decision-Making",
    "Compliance-Ready (NABH, HL7, ICD-10/11)",
];

const WhyChooseUs = () => {
    return (
        <section className="choose-section">

            <div className="choose-left">
                <p className="choose-subtitle">Why Choose Us</p>

                <h2 className="choose-title">
                    We are Committed to Provide you <br />
                    with the <span>Highest Standards Care</span>
                </h2>

                <p className="choose-desc">
                    We empower healthcare providers with secure, efficient, and scalable technology solutions tailored for modern challenges.
                </p>

                <div className="choose-grid">
                    {features.map((item, index) => (
                        <div className="choose-box" key={index}>
                            <span className="tick-icon">✔</span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="choose-right">
                <img
                    src="/choose.jpeg"
                    alt="doctor with baby"
                    className="choose-image"
                />
            </div>

        </section>
    );
};

export default WhyChooseUs;