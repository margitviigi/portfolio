import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaWordpress,
  FaPhp,
  FaFigma,
} from "react-icons/fa";
import { SiWoocommerce, SiMariadb, SiMongodb, SiAdobephotoshop, SiGrafana, SiElementor } from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        <div className="skill-item"><FaHtml5 className="skill-icon" /> <span>HTML</span></div>
        <div className="skill-item"><FaCss3Alt className="skill-icon" /> <span>CSS</span></div>
        <div className="skill-item"><FaJs className="skill-icon" /> <span>JavaScript</span></div>
        <div className="skill-item"><FaReact className="skill-icon" /> <span>React</span></div>
        <div className="skill-item"><FaDatabase className="skill-icon" /> <span>MySQL</span></div>
        <div className="skill-item"><FaWordpress className="skill-icon" /> <span>WordPress</span></div>
        <div className="skill-item"><SiWoocommerce className="skill-icon" /> <span>WooCommerce</span></div>
        <div className="skill-item"><SiMariadb className="skill-icon" /> <span>MariaDB</span></div>
        <div className="skill-item"><SiMongodb className="skill-icon" /> <span>MongoDB</span></div>
        <div className="skill-item"><FaPhp className="skill-icon" /> <span>PHP</span></div>
        <div className="skill-item"><FaFigma className="skill-icon" /> <span>Figma</span></div>
        <div className="skill-item"><SiAdobephotoshop className="skill-icon" /> <span>Photoshop</span></div>
        <div className="skill-item"><SiElementor className="skill-icon" /> <span>Elementor</span></div>
        <div className="skill-item"><SiGrafana className="skill-icon" /> <span>Grafana</span></div>
      </div>
    </div>
  );
}

export default Skills;
