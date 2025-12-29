import React from 'react'
import './Highlights.css'

function Highlights() {
  return (
    <section className="highlights-section">
  <span className="badge">Highlights</span>

  <h2 className="highlights-title">
    Built For <span><i>Performance</i></span> & <span><i>Growth</i></span>
  </h2>

  <div className="highlights-grid">
    <div className="highlight-card">
      <span className="highlight-icon">⚡</span>
      <h3>Fast</h3>
      <p>Lightning-fast load times optimized for performance.</p>
    </div>

    <div className="highlight-card">
      <span className="highlight-icon">🔒</span>
      <h3>Secure</h3>
      <p>Built with modern security practices you can trust.</p>
    </div>

    <div className="highlight-card">
      <span className="highlight-icon">📈</span>
      <h3>SEO-Friendly</h3>
      <p>Optimized to rank higher and grow organic traffic.</p>
    </div>
  </div>
</section>

  )
}

export default Highlights