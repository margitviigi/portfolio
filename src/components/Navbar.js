import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import proflogo from "../pildid/logo.png";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

return (
  <nav className="custom-navbar">
    <div className="navbar-container">
      <NavLink to="/" className="logo-link">
        <img src={proflogo} alt="Margit Viigi" />
      </NavLink>

      <div className="nav-links desktop-nav">
        <NavLink to="/about" className="nav-item">
          About Me
        </NavLink>
        <NavLink to="/projects" className="nav-item">
          My Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>


    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <NavLink to="/about" className="nav-item" onClick={toggleMenu}>
        About Me
      </NavLink>
      <NavLink to="/projects" className="nav-item" onClick={toggleMenu}>
        My Projects
      </NavLink>
      <NavLink to="/contact" className="nav-item" onClick={toggleMenu}>
        Contact
      </NavLink>
    </div>
  </nav>
);

}

export default CustomNavbar;