import React, { useEffect } from 'react'
import './WhyChooseUs.css'
import { Link } from 'react-router-dom'
import aboutVideo from '../../assets/about-video2.mp4'

function WhyChooseUs() {

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
    <section className="choose-section">

      {/* Background Video */}
      <div className="about-video-bg">
        <video autoPlay loop muted playsInline>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>

      <div className="choose-container">

        <span className="badge reveal">Why Choose Us</span>

        <h2 className="choose-title reveal delay-1">
          The Difference You Feel <br />
          <span><i>Before the Results Show</i></span>
        </h2>

        <div className="choose-planet"></div>

        <div className="compare-wrapper">
          
          <div className="compare-card ours reveal delay-2">
            <h3>Our Agency</h3>
            <ul>
              <li>Tailored strategies, never templates</li>
              <li>Modern design with business intent</li>
              <li>Performance-first development</li>
              <li>Clear communication & ownership</li>
              <li>Scalable tech for long-term growth</li>
            </ul>
          </div>

          <div className="compare-divider reveal delay-3">
            <span></span>
          </div>

          <div className="compare-card others reveal delay-2">
            <h3>Other Agencies</h3>
            <ul>
              <li>Generic, recycled solutions</li>
              <li>Design without conversion thinking</li>
              <li>Slow & bloated codebases</li>
              <li>Unclear timelines & costs</li>
              <li>Project-based, no growth support</li>
            </ul>
          </div>

        </div>

        <div className="choose-cta reveal delay-3">
          <Link to='/contact'>
            <button className="primary-btn">
              Start Your Project
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs