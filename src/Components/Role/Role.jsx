import { useEffect } from "react";
import "./Role.css";

const roles = [
  {
    title: "UI / UX Designer",
    desc: "We design intuitive, visually appealing interfaces that enhance user experience across devices.",
  },
  {
    title: "Graphic Designer",
    desc: "Creative brand visuals and marketing assets that communicate clearly and effectively.",
  },
  {
    title: "Web Developer",
    desc: "High-performance, scalable websites built with modern technologies.",
  },
  {
    title: "Digital Marketing Executive",
    desc: "Data-driven strategies that boost visibility, traffic, and conversions.",
  },
  {
    title: "Maintenance & Optimization",
    desc: "Continuous performance optimization, security updates, and monitoring.",
  },
  {
    title: "Business Automation",
    desc: "Automated workflows that save time and increase operational efficiency.",
  },
];

export default function Role() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="roles-section">

      <div className="work-header reveal">
        <span className="badge">Our Role</span>

        <h2 className="delay-1">
          Turning Ideas Into <br />
          <span><i>Momentum.</i></span>
        </h2>

        <p className="delay-2">
          We combine creativity, technology, and strategy to build digital ecosystems that scale.
        </p>
      </div>

      <div className="roles-container reveal delay-1">

        <svg className="connectors">
          <line x1="250" y1="120" x2="700" y2="300" />
          <line x1="250" y1="260" x2="700" y2="300" />
          <line x1="250" y1="400" x2="700" y2="300" />
          <line x1="1150" y1="120" x2="700" y2="300" />
          <line x1="1150" y1="260" x2="700" y2="300" />
          <line x1="1150" y1="400" x2="700" y2="300" />
        </svg>

        {/* LEFT */}
        <div className="roles-column">
          {roles.slice(0, 3).map((role, i) => (
            <div className={`role-card glass reveal delay-${i + 1}`} key={i}>
              <h4>{role.title}</h4>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="roles-center reveal delay-2">
          <div className="globe">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="roles-column">
          {roles.slice(3, 6).map((role, i) => (
            <div className={`role-card glass reveal delay-${i + 1}`} key={i}>
              <h4>{role.title}</h4>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}