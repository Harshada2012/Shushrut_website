import React from "react";
import "./Members.css";

export default function Members() {
    const team = [
        {
            name: "Mr. Mukul Lanke",
            role: "Software Developer",
            img: "/members_icon/mukul_lanke.jpeg",
            desc: "Mukul Lanke has over 8 years of experience in software development. He is hardworking, enthusiastic, and consistently committed to delivering high-quality results. He possesses strong technical skills, a solution-oriented mindset, and the ability to handle complex challenges with confidence. Mukul is known for his quick learning ability, excellent teamwork, and dedication to continuous improvement. His professional attitude, sincerity, and passion for technology make him a valuable asset to any project or organization.",
        },
        {
            name: "Mr. Lakhan Maske",
            role: "Support Head",
            img: "/members_icon/lakhan_maske.jpeg",
            desc: "Lakhan Maske has 5 years of experience and currently serves as the Support Head. He is dedicated, responsible, and highly efficient in handling customer support operations. Lakhan is known for his quick problem-solving skills, calm communication style, and strong commitment to customer satisfaction. He manages his team with discipline and motivation, ensuring smooth service delivery. His professionalism, reliability, and customer-focused approach make him an important asset to the organization."
        },
        {
            name: "Mr. Amit Saha",
            role: "Implementation Head",
            img: "/members_icon/amit_saha.jpeg",
            desc: "Amit Saha has 4 years of experience and works as an Implementation Engineer. He is known for his strong technical skills, thorough understanding of system integrations, and smooth project execution. Amit communicates clearly with clients, ensures timely implementation, and handles challenges with a positive, solution-oriented attitude. Customers consistently appreciate his professionalism, supportive nature, and commitment to delivering high-quality work. His dedication and efficiency make him a valuable part of the team.",
        },
        {
            name: "Mrs. Swarupa Deshpande",
            role: "Support Manager",
            img: "/members_icon/swarupa_deshpande.jpeg",
            desc: "Swarupa Deshpande has 6 years of experience and works as a Support Engineer. She is calm, composed, and handles every situation with clarity and patience. Despite her soft nature, she provides quick and effective support to customers, ensuring their issues are resolved smoothly. Her reliability, dedication, and customer-centric approach make her a highly trusted member of the team."
        },
    ];

     return (
    <div className="members-container">
      {team.map((member, index) => (
        <div className="member-card" key={index}>

          <div className="left-section">
            <img src={member.img} alt={member.name} className="member-img" />
            <h2 className="member-name">{member.name}</h2>
            <p className="role">{member.role}</p>
          </div>

          <div className="right-section">
            <p className="desc">{member.desc}</p>
          </div>

        </div>
      ))}
    </div>
  );
}