import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-card">

        {/* LEFT FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Let’s discuss how we can help you grow.</p>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

        {/* RIGHT INFO */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            Have a project in mind or need expert guidance?  <br/>
            We’re here to help you scale.<br/>
             Our team works closely with you to craft strategies that deliver real growth.  
  Let’s turn your vision into measurable success.
          </p>
          <p>
            Have a project in mind or need expert guidance?  <br/>
            We’re here to help you scale.<br/>
             Our team works closely with you to craft strategies that deliver real growth.  
  Let’s turn your vision into measurable success.
          </p>

          <div className="info-item">
            📧 hello@yourbrand.com
          </div>

          <div className="info-item">
            📞 +91 9XXXXXXXXX
          </div>

          <div className="info-item">
            📍 India
          </div>

          <div className="socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
