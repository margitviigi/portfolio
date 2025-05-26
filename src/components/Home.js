import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home({ mode }) {
  const isProfessional = mode === "professional";

  return (
    <div className={`home-container ${mode}`}>
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {isProfessional ? (
          "WELCOME"
        ) : (
          <>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </>
        )}
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {isProfessional
          ? "Explore my work as a full-stack developer to-be."
          : "…to the creative world of web design, games, and personality insight!"}
      </motion.p>

      <Link
        to={isProfessional ? "/projects" : "/AboutGame"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <motion.div
          className="interactive-element"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isProfessional ? "Discover my projects" : "Start the first game"}
        </motion.div>
      </Link>
    </div>
  );
}

export default Home;
