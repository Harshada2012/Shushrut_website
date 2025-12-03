import './Team.css'

export default function Team() {
    const team = [
        {
            name: "Dr. Niyoti Khilare",
            title: "MBBS, MSc. Diabetes (UK), MBA (IIM Indore)",
            expertise: [
                "Driving Business Growth",
                "Operational Excellence",
                "Commitment to Quality"
            ],
            img: "/team_icon/1st.png"
        },
        {
            name: "Dr. Jay Makwana",
            title: "MBBS (KEM Mumbai), Design Psychology",
            expertise: [
                " Digital Transformation",
                " User-Centric Innovation",
                " Commitment to Excellence"
            ],
            img: "/team_icon/2nd.png"
        },
        {
            name: "Dr. Sandeep Sable",
            title: "MBA in Healthcare & Hospital Management",
            expertise: [
                " Product Development",
                " Enterprise Solutions",
                " Operational Excellence"
            ],
            img: "/team_icon/3rd.png"
        }
    ];

    return (
        <div className="team-section">
            <h2 className="section-title">Our Leadership Team</h2>

            <div className="team-grid">
                {team.map((doc, index) => (
                    <div key={index} className="team-card">
                        <img src={doc.img} alt={doc.name} className="team-photo" />

                        <h3 className="team-name">{doc.name}</h3>
                        <p className="team-title">{doc.title}</p>
                        <ul className="team-expertise">
                            {doc.expertise.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}