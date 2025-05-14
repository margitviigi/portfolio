import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer({ mode }) {
  const isProfessional = mode === "professional";

  return (
    <footer className={`footer ${isProfessional ? "professional-footer" : "personality-footer"}`}>
      <div className="footer-content">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} Margit Viigi</span>
        </div>

        <div className="footer-center">
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className="footer-right">
          {isProfessional ? (
            <span className="footer-tag">Crafted with care </span>
          ) : (
            <span className="footer-tag">Designed with sparkles </span>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;