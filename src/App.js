import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CustomNavbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import AboutGame from "./components/AboutGame";
import IntroScreen from "./components/IntroScreen";
import SkillsMatchGame from "./components/SkillsMatch/SkillsMatchGame";


function App() {
  const [mode, setMode] = useState("professional");

  const toggleMode = () => {
    setMode(mode === "professional" ? "personality" : "professional");
  };

  return (
    <Router>
      <div className={`app-container ${mode}`}>
        <CustomNavbar mode={mode} toggleMode={toggleMode} />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={mode === "personality" ? <IntroScreen /> : <Home mode={mode} />}
            />
            <Route
            path="/about"
            element={
              mode === "personality" ? (
                <AboutGame />
              ) : (
                <div className="aboutskills">
                  <About mode={mode} />
                  <Skills mode={mode} />
                </div>
              )
            }
          />

            
            <Route path="/projects" element={
              mode === "personality" ? (
                <SkillsMatchGame />
              ) : (
              <Projects mode={mode} />  
              )
              } />
            <Route path="/contact" element={<Contact mode={mode} />} />
          </Routes>
        </div>
        <Footer mode={mode} />
      </div>
    </Router>
  );
}

export default App;

