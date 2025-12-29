import { useEffect, useState } from "react";
import './Role.css'
import role1 from '../../assets/role1.jpg'
import role2 from '../../assets/role2.jpg'
import role3 from '../../assets/role3.webp'
import role4 from '../../assets/role4.jpg'
import role5 from '../../assets/role5.jpg'

const roles = [
  {
    title: "UI / UX Designer",
    desc:
      "We design intuitive, visually appealing interfaces that enhance user experience and maximize engagement across all devices.",
    img: role1,
  },
  {
    title: "Graphic Designer",
    desc:
      "Creative visuals, brand assets, and marketing designs crafted to communicate your brand story clearly and memorably.",
    img: role2,
  },
  {
    title: "Web Developer",
    desc:
      "High-performance, scalable websites and web apps built using modern technologies with clean and maintainable code.",
    img: role3,
  },
  {
    title: "Digital Marketing Executive",
    desc:
      "Data-driven marketing strategies that boost visibility, drive traffic, and convert users into loyal customers.",
    img: role4,
  },
  {
    title: "Maintenance & Optimization",
    desc:
      "Ongoing website monitoring, speed optimization, security updates, and performance improvements for long-term success.",
    img: role5,
  },
];

function Role() {
    const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
     <section className="roles-section">
      <div className="roles-container">

        {/* LEFT CONTENT */}
        <div className="roles-content">
          <span className="badge">Our Expertise</span>
          <h2>{roles[active].title}</h2>
          <p>{roles[active].desc}</p>
        </div>
     

        {/* RIGHT SLIDER */}
        <div className="roles-slider">
          <div
            className="roles-track"
            style={{ transform: `translateY(-${active * 120}px)` }}
          >
            {roles.map((role, index) => (
              <div
                key={index}
                className={`role-card ${
                  index === active ? "active" : ""
                }`}
              >
                <img src={role.img} alt={role.title} />
                <span>{role.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Role