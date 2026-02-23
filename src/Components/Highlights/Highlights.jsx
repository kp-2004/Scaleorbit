import React, { useEffect } from 'react'
import './Highlights.css'

function Highlights() {

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
    <section className="highlights-section">

      <div className="light-sweep"></div>

      <span className="badge reveal">Highlights</span>

      <h2 className="highlights-title reveal">
        Built For <span><i>Performance</i></span> & <span><i>Growth</i></span>
      </h2>

      <div className="highlights-grid">
        <div className="highlight-card reveal">
          <span className="highlight-icon">⚡</span>
          <h3>Fast</h3>
          <p>Lightning-fast load times optimized for performance.</p>
        </div>

        <div className="highlight-card reveal">
          <span className="highlight-icon">🔒</span>
          <h3>Secure</h3>
          <p>Built with modern security practices you can trust.</p>
        </div>

        <div className="highlight-card reveal">
          <span className="highlight-icon">📈</span>
          <h3>SEO-Friendly</h3>
          <p>Optimized to rank higher and grow organic traffic.</p>
        </div>
      </div>

    </section>
  )
}

export default Highlights