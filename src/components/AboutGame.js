import React, { useState } from "react";
import "./AboutGame.css";
import stageData from "./stageData"; 

function AboutGame() {
  const [stageIndex, setStageIndex] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  const currentStage = stageData[stageIndex];
  const completed = stageIndex >= stageData.length;

  const handleChoice = (isCorrect, altCaption) => {
    if (isCorrect) {
      setWrongAnswer(null);
      setStageIndex((prev) => prev + 1);
    } else {
      setWrongAnswer({
       altCaption
       });
    }
  };

    return (
  <div className="story-game">
    {completed ? (
      <div className="end-screen">
        <h2>You Did It! </h2>
        <p>Here’s what I gained on this wild ride:</p>
        <ul className="lessons-list">
          <li> Resilience through unexpected challenges</li>
          <li> Adaptability and calm under pressure</li>
          <li> Clear, honest communication</li>
          <li> Creative problem-solving (with humor)</li>
          <li> Time management (hello, parenthood)</li>
          <li> Commitment to learning and growth</li>
        </ul>
        <p className="easter-egg">
           Psst... you’ve unlocked something {" "}
          <a href="/" className="egg-link">Return to my portfolio</a>
        </p>
      </div>
    ) : wrongAnswer ? (
      <div>
        <p>{wrongAnswer.altCaption}</p>
        <button className="choice-btn" onClick={() => setWrongAnswer(null)}>Try Again</button>
      </div>
    ) : (
      <>
        <h2>{currentStage.title}</h2>
        <div className="polaroid">
          {currentStage.altImage && (
            <img src={currentStage.altImage} alt="Scene image" className="stage-image" />
          )}
          <p className="caption">{currentStage.caption}</p>
        </div>
        <p className="question">{currentStage.question}</p>
        <div className="choices">
          {currentStage.choices.map((choice, index) => (
            <button
              key={index}
              className="choice-btn"
              onClick={() =>
                handleChoice(choice.correct, choice.altCaption)
              }
            >
              {choice.text}
            </button>
          ))}
        </div>
      </>
    )}
  </div>
);

}

export default AboutGame;