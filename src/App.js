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

import IntroScreen from "./components/IntroScreen";
import AboutGame from "./components/AboutGame";
import SkillsMatchGame from "./components/SkillsMatch/SkillsMatchGame";
import TriviaCVGame from "./components/TriviaCVGame";

function App() {
  const [mode, setMode] = useState("professional");

  const toggleMode = () => {
    setMode((prev) => (prev === "professional" ? "personality" : "professional"));
  };

  return (
    <Router>
      <div className={`app-container ${mode}`}>
        <CustomNavbar mode={mode} toggleMode={toggleMode} />
        <div className="main-content">
          <Routes>
            {mode === "professional" ? (
              <>
                <Route path="/" element={<Home mode={mode} />} />
                <Route
                  path="/about"
                  element={
                    <div className="aboutskills">
                      <About mode={mode} />
                      <Skills mode={mode} />
                    </div>
                  }
                />
                <Route path="/projects" element={<Projects mode={mode} />} />
                <Route path="/contact" element={<Contact mode={mode} />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/AboutGame" element={<AboutGame />} />
                <Route path="/SkillsMatchGame" element={<SkillsMatchGame />} />
                <Route path="/TriviaCVGame" element={<TriviaCVGame />} />
              </>
            )}
          </Routes>
        </div>
        <Footer mode={mode} />
      </div>
    </Router>
  );
}

export default App;


