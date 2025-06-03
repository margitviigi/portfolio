import React from "react";
import "./Projects.css";
import minitoit from "../pildid/minitoit.png";
import korrastusabi from "../pildid/korrastusabi.png";
import kleidipood from "../pildid/kleidipood.png";
import hakaton from "../pildid/hakaton.png";
import ehitus from "../pildid/ehitus.png";
import haaletus from "../pildid/haaletus.png";

const projectsData = [
  {
    id: 1,
    title: "Minifood",
    image: minitoit,
    description: "An app to collect recipes deemed edible by toddlers. Co-created with talented Kaisa.",
    tools: ["React", "CSS", "JavaScript"],
    website: "https://vso24viigi.ita.voco.ee/minitoit2/",
    github: "https://github.com/kaisaets/MiniToit", 
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
    description: "I designed the concept and UX; my teammates heroically did most of the coding. Try it out!",
    tools: ["JavaScript", "CSS", "Google Sheets"],
    website: "https://hindamine.ita.voco.ee/",
    github: "https://github.com/KaarelVv/grading_system",
  },
  {
    id: 5,
    title: "Building company website",
    image: ehitus,
    description: "Got to flex my WordPress and web design skills in this group project. Stainvere OY is a building company in Finland that now has this cool bilingual website to show off their best work to both Finnish- and Estonian-speaking clients.",
    tools: ["WordPress", "Elementor"],
    website: "https://vso24viigi.ita.voco.ee/ehitus/",
    github: "#",
  },
  {
    id: 6,
    title: "Voting system",
    image: haaletus,
    description: "I proudly present yet another voting tool - this one comes with actual database back-end! You can enter the statement to vote over, and up to 11 voters have 5 minutes vote 'yes' or 'no'. Every voting round and vote casted gets logged in the database.",
    tools: ["SQL", "Php", "HTML", "CSS"],
    website: "https://vepso.ita.voco.ee/kaisa_margit/index.php",
    github: "#",
  },
];

function Projects() {

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
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
