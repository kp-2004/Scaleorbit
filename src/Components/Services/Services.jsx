import React from 'react'
import './Services.css'

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
  return (
    <section className="services-section">
      <div className="services-container">

        <span className="badge">Our Services</span>

        <h2 className="services-title">
          Solutions That <span><i>Drive Growth</i></span>
        </h2>
        <div className="service-planet"></div>

        <p className="services-subtitle">
          From design to development and growth — we build digital experiences
          that perform, scale, and convert.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button className="service-btn">
                Get Started →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services