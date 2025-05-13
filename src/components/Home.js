import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Home({ mode }) {
  return (
    <div className={`home-container ${mode}`}>
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
               {mode === "professional"
          ? "WELCOME"
          : <h1 class="welcome-text">
          <span>W</span><span>E</span><span>L</span><span>C</span><span>O</span><span>M</span><span>E</span>
        </h1>} 
      </motion.h1>
      
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {mode === "professional"
          ? "Explore my work as a full-stack developer to-be."
          : "to creative world of web design!"}
      </motion.p>
      
      <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit'}}>
        <motion.div
          className="interactive-element"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mode === "professional" ? "Discover my projects" : "Discover my projects"}
        </motion.div>
      </Link>
    </div>
  );
}

export default Home;
