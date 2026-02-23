import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
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
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero reveal">
        <h1>Contact Us</h1>
        <div className="hero-underline"></div>
        <p>
          Let’s collaborate to create measurable digital impact and
          build something extraordinary together.
        </p>

        <div className="wave-bg"></div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="contact-info">
        <div className="info-card reveal">
          <div className="icon">📍</div>
          <h3>Office Location</h3>
          <p>Shiamgir, India<br />Serving clients worldwide</p>
        </div>

        <div className="info-card reveal">
          <div className="icon">⏰</div>
          <h3>Working Hours</h3>
          <p>Mon - Fri: 9AM - 6PM<br />Weekend: By Appointment</p>
        </div>

        <div className="info-card reveal">
          <div className="icon">💬</div>
          <h3>Communication</h3>
          <p>Email & Strategy Calls<br />24h Response Time</p>
        </div>
      </section>

      {/* ================= MAIN CONTACT ================= */}
      <section className="contact-main">

        {/* LEFT FORM */}
        <div className="contact-form reveal">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className="contact-content reveal">
          <h2>
            Have <span>Any Questions?</span>
          </h2>
          <p>
            We combine strategy, design, and performance marketing to
            deliver measurable growth. Let’s discuss how we can elevate
            your digital presence and create long-term impact.
          </p>

          <div className="floating-shape"></div>
        </div>
      </section>

    </div>
  );
};

export default Contact;