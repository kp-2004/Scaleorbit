import { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.webp'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon"><img src={logo} alt="logo" height={50} width={50}/></span>
          <span>SCALE ORBIT</span>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home"><Link to="/">Home</Link></a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonial" className="nav-btn">Testimonial</a></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
