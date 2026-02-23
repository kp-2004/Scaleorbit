import React, { useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Website Design",
    items: [
      "UI / UX Design",
      "Responsive (Mobile Friendly)",
      "Modern Visual Layouts",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Static Websites",
      "Dynamic Websites",
      "React / MERN Applications",
    ],
  },
  {
    title: "E-Commerce Solutions",
    items: [
      "Online Stores",
      "Payment Gateway Integration",
      "Product Management",
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      "SEO Optimization",
      "Social Media Marketing",
      "Google & Facebook Ads",
    ],
  },
  {
    title: "Maintenance & Support",
    items: [
      "Website Updates",
      "Bug Fixes",
      "Security & Backups",
    ],
  },
  {
    title: "Performance & Optimization",
    items: [
      "Website Speed Optimization",
      "Core Web Vitals Improvement",
      "Image & Asset Optimization",
    ],
  },
];

function Services() {

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
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="light-sweep"></div>

        <span className="badge reveal">Our Services</span>

        <h2 className="services-title reveal delay-1">
          Solutions That <span><i>Drive Growth</i></span>
        </h2>

        <p className="services-subtitle reveal delay-2">
          From design to development and growth — we build digital experiences
          that perform, scale, and convert.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-card reveal delay-${(index % 3) + 1}`} 
              key={index}
            >
              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <Link to="/contact">
                <button className="service-btn">
                  Get Started →
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services