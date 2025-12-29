import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section">
  <div className="about-container">

    {/* Decorative Planet */}
    <div className="about-planet"></div>

    {/* Left Content */}
    <div className="about-content">
      <span className="badge">About Us</span>

      <h2>
        Building Digital Products <br />
        <span><i>That Actually Scale</i></span>
      </h2>

      <p>
        We are a creative digital team focused on building modern, high-performing
        web experiences. Our journey started with curiosity, creativity, and a
        passion for technology — and today, we help brands and creators grow online
        with confidence.
      </p>

      <p>
        Our mission is simple: build meaningful digital products that are fast,
        secure, and designed for real-world growth. We don’t just deliver projects —
        we build long-term partnerships.
      </p>

      <p>
        What sets us apart is our attention to detail, transparent process, and
        performance-driven mindset. Every line of code and every design decision
        serves a purpose.
      </p>
    </div>

    {/* Right Side */}
    <div className="about-right">
      <div className="about-skills">
        <h3>Skills & Technologies</h3>
        <ul>
          <li>⚛️ Web Development</li>
          <li>🎨 Graphic Designing</li>
          <li>🧠 SEO</li>
          <li>🗄 Video Editing</li>
          <li>📈 Maintainance </li>
        </ul>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h4>2+</h4>
          <span>Years Experience</span>
        </div>
        <div className="stat">
          <h4>20+</h4>
          <span>Projects Built</span>
        </div>
      </div>
    </div>

  </div>
</section>

  )
}

export default About