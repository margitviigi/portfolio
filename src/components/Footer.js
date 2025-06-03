import React, { useState } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("margit.viigi@voco.ee").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} Margit Viigi</span>
        </div>

          <div className="footer-center">
            <div className="email-wrapper">
              <button className="icon-btn" onClick={handleCopyEmail} title="Copy email">
                <FaEnvelope />
              </button>
              {copied && (
                <div className="tooltip-bubble">Email copied!</div>
              )}
            </div>

            <a href="https://github.com/margitviigi" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>

          </div>

        <div className="footer-right">

              <span className="footer-tag">Download my CV: </span>
              <a href="https://margitviigi.github.io/portfolio/CV_Margit_Viigi.pdf" download="CV_Margit_Viigi.pdf"   target="_blank"
  rel="noopener noreferrer" className="cv-link"title="Download CV">
                <FaDownload />
              </a>
        </div>
      </div>

        </footer>
  );
}

export default Footer;