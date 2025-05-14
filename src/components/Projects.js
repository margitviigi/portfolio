import React from "react";
import "./Projects.css";
import minitoit from "../pildid/minitoit.png";
import korrastusabi from "../pildid/korrastusabi.png";
import kleidipood from "../pildid/kleidipood.png";
import hakaton from "../pildid/hakaton.png";

const projectsData = [
  {
    id: 1,
    title: "Minifood",
    image: minitoit,
    description: "An app to collect recipes deemed edible by toddlers. Co-created with talented Kaisa.",
    tools: ["React", "CSS", "JavaScript"],
    website: "https://vso24viigi.ita.voco.ee/minitoit2/",
    github: "#", 
  },
  {
    id: 2,
    title: "Cleaning help & motivation",
    image: korrastusabi,
    description: "My very first website design! A mock cleaning company site with a future fallback career plan.",
    tools: ["HTML", "CSS"],
    website: "https://vso24viigi.ita.voco.ee/veebiarendus/l%C3%B5puprojekt/",
    github: "#",
  },
  {
    id: 3,
    title: "Fantasy dress shop",
    image: kleidipood,
    description: "My first and only webshop so far. Yes, I have learned about the concept of accessibility since.",
    tools: ["WordPress", "WooCommerce"],
    website: "https://vso24viigi.ita.voco.ee/wordpress",
    github: "#",
  },
  {
    id: 4,
    title: "Hackathon judging tool",
    image: hakaton,
    description: "I designed the concept and UX; my teammates heroically did most of the coding. Use password marko123 to try it out!",
    tools: ["JavaScript", "CSS", "Google Sheets"],
    website: "https://hindamine.ita.voco.ee/",
    github: "#",
  },
  {
    id: 5,
    title: "Coming Soon!",
    image: "https://via.placeholder.com/600x400?text=New+Project",
    description: "Exciting new project in progress...",
    tools: ["TBD"],
    website: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Stay Tuned!",
    image: "https://via.placeholder.com/600x400?text=Next+Big+Thing",
    description: "Another awesome project on the way!",
    tools: ["TBD"],
    website: "#",
    github: "#",
  },
];

function Projects({ mode }) {
  const isProfessional = mode === "professional";

  return (
    <div className={`projects-container ${isProfessional ? "professional-mode" : "personality-mode"}`}>
      <h2 className="projects-title">{isProfessional ? "My Projects" : "Creative Works"}</h2>
      <div className={`projects-grid`}>
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="card-overlay">
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="overlay-btn">View Website</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">View GitHub</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tools"><strong>Tools:</strong> {project.tools.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
