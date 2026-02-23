import React, { useEffect } from 'react'
import './About.css'
import aboutVideo from '../../assets/about-video2.mp4'

function About() {

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
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-section">

      {/* Background Video */}
      <div className="about-video-bg">
        <video autoPlay loop muted playsInline>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>

      <div className="about-container">

        {/* Left Content */}
        <div className="about-content reveal">
          <span className="badge">About Us</span>

          <h2 className="reveal delay-1">
            Building Digital Products <br />
            <span><i>That Actually Scale</i></span>
          </h2>

          <p className="reveal delay-2">
            We are a creative digital team focused on building modern, high-performing
            web experiences.
          </p>

          <p className="reveal delay-3">
            Our mission is simple: build meaningful digital products that are fast,
            secure, and designed for real-world growth.
          </p>

          <p className="reveal delay-4">
            Every line of code and every design decision serves a purpose.
          </p>
        </div>

        {/* Right Side */}
        <div className="about-right">

          <div className="about-skills reveal delay-2">
            <h3>Skills & Technologies</h3>
            <ul>
              <li>⚛️ Web Development</li>
              <li>🎨 Graphic Designing</li>
              <li>🧠 SEO</li>
              <li>🗄 Video Editing</li>
              <li>📈 Maintenance</li>
            </ul>
          </div>

          <div className="about-stats reveal delay-3">
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