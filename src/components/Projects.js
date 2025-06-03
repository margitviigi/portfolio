import React from "react";
import "./Projects.css";
import Masonry from "react-masonry-css";
import minitoit from "../pildid/minitoit.png";
import korrastusabi from "../pildid/korrastusabi.png";
import kleidipood from "../pildid/kleidipood.png";
import hakaton from "../pildid/hakaton.png";
import ehitus from "../pildid/ehitus.png";
import haaletus from "../pildid/haaletus.png";
import toolipood from "../pildid/toolipood.png";

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
    title: "Building company website",
    image: ehitus,
    description: "Got to flex my WordPress and web design skills in this group project. Stainvere OY is a building company in Finland that now has this cool bilingual website to show off their best work to both Finnish- and Estonian-speaking clients.",
    tools: ["WordPress", "Elementor"],
    website: "https://vso24viigi.ita.voco.ee/ehitus/",
    github: "#",
  },
  {
    id: 5,
    title: "Hackathon judging tool",
    image: hakaton,
    description: "I designed the concept and UX; my teammates heroically did most of the coding. Try it out!",
    tools: ["JavaScript", "CSS", "Google Sheets"],
    website: "https://hindamine.ita.voco.ee/",
    github: "https://github.com/KaarelVv/grading_system",
  },

  {
    id: 6,
    title: "Voting system",
    image: haaletus,
    description: "I proudly present yet another voting tool - this one comes with actual database back-end!",
    tools: ["SQL", "Php", "HTML", "CSS"],
    website: "https://vepso.ita.voco.ee/kaisa_margit/index.php",
    github: "#",
  },
  {
    id: 7,
    title: "Armchair shop",
    image: toolipood,
    description: "A Figma exercise in web design - a mobile app mockup for a company that sells luxury armchairs.",
    tools: ["Figma", "Photoshop"],
    website: "https://www.figma.com/proto/ojGgMeyjlWAtK7384IRR7x/Margiti-toolipood---klassiprojekt?node-id=11-103",
    github: "#",
  },
];

function Projects() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 1,
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="projects-masonry"
        columnClassName="masonry-column"
      >
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="card-overlay">
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="overlay-btn">View Website</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool, index) => (
                  <span key={index} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Projects;
