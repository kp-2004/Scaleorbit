import React, { useEffect, useRef, useState } from "react";
import "./Results.css";
import mainImg from "../../assets/large_img.jpg";
import smallImg from "../../assets/small_img.jpg";

/* ===============================
   FEATURE DATA
================================= */
const features = [
  {
    title: "Proven Performance",
    desc: "High-converting digital systems that drive consistent growth."
  },
  {
    title: "Data-Driven Strategy",
    desc: "Every decision backed by analytics and measurable insights."
  },
  {
    title: "Conversion Optimization",
    desc: "We transform traffic into qualified leads and loyal customers."
  },
  {
    title: "Long-Term Growth",
    desc: "Sustainable digital ecosystems built for scalability."
  }
];

/* ===============================
   COUNTER COMPONENT
================================= */
function Counter({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    function animate() {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-card reveal" ref={ref}>
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}

/* ===============================
   MAIN COMPONENT
================================= */
function Results() {
  const imageRef = useRef(null);

  /* ===============================
     3D TILT EFFECT
  ================================= */
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  /* ===============================
     SCROLL REVEAL
  ================================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="results-section">
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="results-header reveal">
          <div className="badge-pill">Our Results →</div>
          <h2>
            Delivering Measurable <br />
            <span>Digital Growth</span>
          </h2>
          <p className="support-text reveal">
              We build performance-driven digital ecosystems powered by
              analytics, scalable architecture, and measurable ROI-focused
              strategies.
            </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="results-grid">

          {/* LEFT SIDE IMAGE */}
          <div className="image-area reveal" ref={imageRef}>
            <img src={mainImg} className="main-img" alt="Main Result" />
            <img src={smallImg} className="small-img" alt="Secondary Result" />

            <div className="circle-badge">
              250+
              <span>Projects Delivered</span>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="content-area">

            

            <div className="feature-list">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="feature-card reveal"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="icon-line"></div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="stats-row">
          <Counter value={5} suffix="+" label="Years Experience" />
          <Counter value={300} suffix="+" label="Projects Completed" />
          <Counter value={150} suffix="+" label="Happy Clients" />
          <Counter value={1} suffix="M+" label="User Interactions" />
        </div>

      </div>
    </section>
  );
}

export default Results;