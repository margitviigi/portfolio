import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsMatchGame from "./components/SkillsMatch/SkillsMatchGame";

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomNavbar />
        <div className="main-content">
          <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/about"
                  element={
                    <div className="aboutskills">
                      <About />
                      <Skills />
                    </div>
                  }
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


