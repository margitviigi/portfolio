import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
          WELCOME
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore my work as a full-stack developer to-be.
      </motion.p>

      <Link
        to="/projects"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <motion.div
          className="interactive-element"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Discover my projects
        </motion.div>
      </Link>
    </div>
  );
}

export default Home;
