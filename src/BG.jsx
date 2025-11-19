import "./BG.css";

export default function BG() {
    return (
        <div className="BG">
            <div className="BG-overlay"></div>

            <div className="BG-content">
                <button className="BG-tag">Welcome To Shushrut</button>

                <h1>We Provide Best Medical & Health Care Services</h1>

                <p>
                    With over 25 years of experience, we empower hospitals, clinics, diagnostics, and medical colleges with secure, scalable technology platforms.
                </p>

                <div className="BG-buttons">
                    <button className="btn-1">Make Appointment</button>
                    <button className="btn-2">Our Services</button>
                </div>
            </div>
        </div>
    );
}