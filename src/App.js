import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CustomNavbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

