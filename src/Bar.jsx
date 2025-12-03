import React, { useEffect, useState, useRef } from "react";
import "./Bar.css";

const stats = [
  { value: 100, label: "Professionals Doctor" },
  { value: 70, label: "Health Department" },
  { value: 30, label: "Award Winners" },
  { value: 1000, label: "Satisfied Patients" },
];

const Bar = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // 🔒 Prevents early animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when 60% of the section is visible
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setAnimate(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bar-section" ref={sectionRef}>
      <div className="bar-overlay">
        <div className="bar-grid">
          {stats.map((item, index) => (
            <CounterBox key={index} end={item.value} label={item.label} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterBox = ({ end, label, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 2000;
    const fps = 60;
    const increment = end / (duration / fps);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [animate, end]);

  return (
    <div className="bar-box">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

export default Bar;