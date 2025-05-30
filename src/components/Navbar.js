import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import proflogo from "../pildid/logo.png";

function CustomNavbar({ mode, toggleMode }) {
  return (
    <Navbar expand="lg" className={`custom-navbar ${mode}`}>
      <div className="navbar-container">
        <Navbar.Brand as={NavLink} to="/">
          {mode === "professional" ? (
            <img
              src={proflogo}
              height="140px"
              alt="Margit Viigi"
              className="navbar-brand"
            />
          ) : (
            <h2 className="navbar-brand">Margit Viigi</h2>
          )}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {mode === "professional" ? (
              <>
                <Nav.Link as={NavLink} to="/about" className="nav-item">
                  <span>About Me</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects" className="nav-item">
                  <span>My Projects</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="nav-item">
                  <span>Contact</span>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/AboutGame" className="nav-item">
                  <span>Truth Game</span>
                   </Nav.Link>
                <Nav.Link as={NavLink} to="/SkillsMatchGame" className="nav-item">
                  <span>Skills Match</span>
                   </Nav.Link>
                <Nav.Link as={NavLink} to="/TriviaCVGame" className="nav-item">
                  <span>CV Trivia</span>
                  </Nav.Link>
              </>
            )}
          </Nav>
          {
/*
          <div className="switch-container">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleMode}
                checked={mode === "personality"}
              />
              <span className="slider">
                <span
                  className={`switch-text left ${
                    mode === "personality" ? "active" : ""
                  }`}
                >
                  On
                </span>
                <span
                  className={`switch-text right ${
                    mode === "professional" ? "active" : ""
                  }`}
                >
                  Off
                </span>
              </span>
            </label>
            <span className="personality-tag">Personality Mode</span>
          </div> */} 
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;