import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroScreen.css";

function IntroScreen() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/about");
  };

  return (
    <div className="intro-container">
      <h1 className="intro-title">Get to know me through playing a game of 
        <br></br>"Truth and 3 Outrageous Lies"</h1>
      <p className="intro-text">
        You’re about to play through the questionable decisions and surprising comebacks of my chaotic 20s that turned me into a future teammate worth having (also, find out why my resume is as empty as it is).
      </p>
      <p className="intro-text">Choose wisely. Or don’t. It’ll be funny either way.</p>
      <button className="play-button" onClick={startGame}>▶ Start the Game</button>
    </div>
  );
}

export default IntroScreen;