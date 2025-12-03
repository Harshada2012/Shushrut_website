import "./membersdemo.css";

export default function membersdemo() {
  const members = [
    {
      img: "/members/m1.png",
      title: "Turning everyday results to AI powered insights in Kidney Care",
    },
    {
      img: "/members/m2.png",
      title: "Transforming cancer care",
 
      
    },
    {
      img: "/members/m3.png",
      title: "Caring for a parent with Alzheimer’s: Silvia’s journey",
    
  
    }
  ];

  return (
    <div className="members-section">
      <div className="members-grid">
        {members.map((member, i) => (
          <div className="member-card" key={i}>
            <img src={member.img} alt={member.title} className="member-img" />

            <div className="member-content">
              <h3 className="member-title">{member.title}</h3>

              {member.subtitle && (
                <p className="member-subtitle">{member.subtitle}</p>
              )}

              <p className="member-date">{member.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="member-btn-wrapper">
        <button className="members-btn">Explore more stories</button>
      </div>
    </div>
  );
}