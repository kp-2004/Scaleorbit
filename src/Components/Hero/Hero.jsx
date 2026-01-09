import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import video from '../../assets/hero-vedio.mp4'

function Hero() {
  return (
    <section className="hero" id="home">
      
      {/* VIDEO BACKGROUND */}
      <video
        className="hero-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* GRADIENT OVERLAY */}
  <div className="video-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <span className="badge">Your Growth Partner →</span>

        <h1>
          We Don’t Work For You <br />
          <span>We Build With You.</span>
        </h1>

        <p className="hero-description">
          We partner with creators, entrepreneurs, and brands to scale using
          viral content, paid systems, and next-level marketing execution.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn primary-btn">
            Get a Free Quote
          </Link>
          <a href="#works" className="btn secondary-btn">
            View Our Work
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
