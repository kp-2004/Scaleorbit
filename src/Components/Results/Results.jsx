import React from 'react'
import './Results.css'

function Results() {
  return (
     <section className="results-section">
      <div className="results-container">
        
        {/* Header */}
        <div className="result-planet"></div>
        <div className="results-header">
          <span className="badge">Our Results →</span>
          <h2>
            Proven Results <br />
            <span><i>Built Through Collaboration</i></span>
          </h2>
        </div>

        {/* Content */}
        <div className="results-content">
          
          {/* Left Text */}
          <div className="results-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              We focus on real growth, scalable systems, and strategies that
              deliver measurable impact over time.
            </p>
          </div>

          {/* Right Slider */}
          <div className="results-slider">
            <div className="slider-track">
              <div className="result-card">+320% Growth</div>
              <div className="result-card">1M+ Views</div>
              <div className="result-card">5x ROI</div>
              <div className="result-card">120K Leads</div>
              <div className="result-card">+320% Growth</div>
              <div className="result-card">1M+ Views</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Results