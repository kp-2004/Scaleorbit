import "./Footer.css";
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="footer">
      {/* Stars */}
      <div className="footer-stars"></div>

      {/* Planet */}
      <div className="footer-planet"></div>

      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-brand">
        
          <div className="logo"><img src={logo} alt="logo" height={100} width={100} />
          <h2 className="brand-logo">SCALE ORBIT</h2>
          </div>

          <h4>Scale Smarter. Grow Faster.</h4>
          <p>
            Partner with our team to build high-impact digital systems that drive growth, 
            visibility, and long-term success.
          </p>

          <button className="footer-btn">
            Book Free Consultation →
          </button>

          <div className="socials">
            <span>in</span>
            <span>x</span>
            <span>ig</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h5>Home</h5>
            <a href="#">Home page</a>
            <a href="#">Services</a>
            <a href="#">Our Work</a>
            <a href="#">Testimonials</a>
          </div>

          <div>
            <h5>Other</h5>
            <a href="#">Hiring</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h5>Contact</h5>
            <a href="#">Contact</a>
            <a href="#">FAQ’s</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        ©2025, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
