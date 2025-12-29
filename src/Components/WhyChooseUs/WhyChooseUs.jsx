import React from 'react'
import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className="choose-section">
      <div className="choose-container">

        <span className="badge">Why Choose Us</span>

        <h2 className="choose-title">
          The Difference You Feel <br />
          <span><i>Before the Results Show</i></span>
        </h2>

        <div className="choose-planet"></div>
        <div className="compare-wrapper">

          <div className="compare-card ours">
            <h3>Our Agency</h3>
            <ul>
              <li>Tailored strategies, never templates</li>
              <li>Modern design with business intent</li>
              <li>Performance-first development</li>
              <li>Clear communication & ownership</li>
              <li>Scalable tech for long-term growth</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="compare-divider">
            <span></span>
          </div>

          <div className="compare-card others">
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

        {/* CTA */}
        <div className="choose-cta">
          <button className="primary-btn">Start Your Project</button>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs