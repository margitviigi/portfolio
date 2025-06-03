import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import proflogo from "../pildid/logo.png";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <div className="navbar-container">
        <Navbar.Brand as={NavLink} to="/">
            <img
              src={proflogo}
              height="140px"
              alt="Margit Viigi"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
                <Nav.Link as={NavLink} to="/about" className="nav-item">
                  <span>About Me</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects" className="nav-item">
                  <span>My Projects</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="nav-item">
                  <span>Contact</span>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;