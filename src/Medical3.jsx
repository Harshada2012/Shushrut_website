import "./Medical3.css";

export default function Medical3() {
    return (
        <section className="hero-container">

            <div className="hero-left">

                <h4 className="hero-small-title">Welcome To Shushrut</h4>

                <h2 className="hero-title">
                    We're here when you need us <br />
                    – for every <span>Care in the World</span>
                </h2>

                <p className="hero-desc">
                    Shushrut System PVT Ltd. integrates digital health strategies and smart analytics to transform healthcare delivery.
                    We empower healthcare providers with secure, efficient, and scalable technology solutions tailored for modern challenges.
                </p>

                <ul className="hero-list">
                    <li><i className="check-icon">✔</i> Enhanced Operational Efficiency</li>
                    <li><i className="check-icon">✔</i> Seamless Patient Management</li>
                    <li><i className="check-icon">✔</i> Improved Data Accuracy & Security</li>
                    <li><i className="check-icon">✔</i> Scalable for Single or Multi-location</li>
                    <li><i className="check-icon">✔</i> Better Decision-Making</li>
                    <li><i className="check-icon">✔</i> Compliance-Ready (NABH, HL7, ICD-10/11)</li>
                </ul>

                <button className="hero-btn">Schedule Appointment</button>
            </div>

            <div className="hero-right">
                <img src="doc2.jpeg" alt="Doctors" className="hero-image" />

                <div className="experience-box">
                    <h2>20</h2>
                    <p>Years Of Experience</p>
                </div>
            </div>

        </section>
    );
}