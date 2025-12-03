import React from "react";
import Slider from "react-slick";
import "./Clients.css";

const testimonials = [
  {
    text: "Installation to training was smooth; the team was extremely responsive.",
    name: "- Dr. N. Joshi",
  },
  {
    text: "Excellent support and a 40% improvement in daily operations of patients.",
    name: "- Dr. S. Kulkarni",
  },
  {
    text: "Shushrut's hospital software improved our workflow efficient, fast and tailored.",
    name: "- Dr. Mehta",
  },
  {
    text: "Diagnostic reporting streamlined and billing errors reduced drastically.",
    name: "- Dr. A. Rane",
  },
];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <p className="testimonial-subtitle"><b>What Our Clients Say</b></p>

      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="testimonial-slide" key={index}>
              <div className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-name">
                  <b>{t.name}</b>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;