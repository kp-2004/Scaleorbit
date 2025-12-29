import { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.webp'

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#" className="nav-btn">Hiring</a></li>
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
