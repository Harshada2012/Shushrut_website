import React, { useEffect, useRef, useState } from "react";
import "./Bar.css";

const stats = [
  { icon: "/icon/hospital-solid-full.svg", number: 75, suffix: "+", label: "Active Hospitals" },
  { icon: "/icon/building-columns-solid-full.svg", number: 2, suffix: "", label: "Medical Colleges" },
  { icon: "/icon/graduation-cap-solid-full.svg", number: 300000, suffix: "+", label: "Admissions Logged" },
  { icon: "/icon/heart-pulse-solid-full.svg", number: 360000, suffix: "+", label: "OPD Patients (YTD)" },
  { icon: "/icon/file-solid-full.svg", number: 100000, suffix: "+", label: "Discharge Summary (YTD)" },
  { icon: "/icon/file-prescription-solid-full.svg", number: 250000, suffix: "+", label: "Prescriptions" },
  { icon: "/icon/vial-circle-check-solid-full.svg", number: 550000, suffix: "+", label: "Pathology Tests" },
  { icon: "/icon/radiology-solid-full.svg", number: 150000, suffix: "+", label: "Radiology Tests" },
];

const Counter = ({ end, suffix, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCount(0); 
      return;
    }

    let start = 0;
    const speed = 25;
    const increment = end / 80;

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, speed);

    return () => clearInterval(counter);
  }, [startCounting, end]);

  const formatNumber = (num) => {
    if (num >= 1000000) return Math.floor(num / 1000000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "K";
    return num;
  };

  return <h3>{formatNumber(count)}{suffix}</h3>;
};

export default function Bar() {
  const [startCounting, setStartCounting] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
        } else {
          setStartCounting(false);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bar-section" ref={barRef}>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stats-box" key={index}>
            <img src={item.icon} className="stats-icon" alt="icon" />

            <Counter
              end={item.number}
              suffix={item.suffix}
              startCounting={startCounting}
            />

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}