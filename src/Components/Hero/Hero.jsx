import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="stars stars-big"></div>
<div className="stars stars-small"></div>

      <div className="planet"></div>

      <div className="hero-content">
  <span className="badge">Your Growth Partner →</span>

  <h1>
    We Don’t Work For You <br />
    <span>We Build With You.</span>
  </h1>

  <p className="hero-description">
    We partner with creators, entrepreneurs, and brands to scale using viral
    content, paid systems, and next-level marketing execution.
  </p>

  <div className="hero-buttons">
    <a href="#quote" className="btn primary-btn">
      Get a Free Quote
    </a>
    <a href="#work" className="btn secondary-btn">
      View Our Work
    </a>
  </div>
</div>

    </section>
  );
};

export default Hero