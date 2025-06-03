import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaWordpress } from "react-icons/fa";
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
      </div>
    </div>
  );
}

export default Skills;


