import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import levelData from "./levelsData";
import "./SkillsMatchGame.css";

function SkillsMatchGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [matches, setMatches] = useState({});
  const [showIntro, setShowIntro] = useState(true);

  const currentLevel = levelData[levelIndex];

  const handleDrop = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // Dragged back to gifPool
    if (destination.droppableId === "gifPool") {
      setMatches((prev) => ({
        ...prev,
        [draggableId]: "gifPool",
      }));
      return;
    }

    // Dropped on a statement — remove any other GIF matched there
    setMatches((prev) => {
      const updatedMatches = { ...prev };

      // Remove other GIFs matched to the destination statement
      Object.entries(updatedMatches).forEach(([gifId, match]) => {
        if (match === destination.droppableId && gifId !== draggableId) {
          updatedMatches[gifId] = "gifPool";
        }
      });

      // Assign the dragged GIF to the new statement
      updatedMatches[draggableId] = destination.droppableId;

      return updatedMatches;
    });
  };

  const isMatchCorrect = (gifId) => {
    const gif = currentLevel.gifs.find((g) => g.id === gifId);
    return matches[gifId] === gif?.matchText;
  };

  const allCorrect = currentLevel.gifs.every((gif) => isMatchCorrect(gif.id));

  if (showIntro) {
    return (
      <div className="story-game intro-screen">
        <h2>Welcome to Skills Match</h2>
        <p>Match each <strong>GIF</strong> with the statement you guess it best describes. Play both levels to see how my skills have evolved in less than a year! </p>
        <p>Correct = <span style={{ color: "#4ecdc4" }}>blue</span>, Wrong = <span style={{ color: "#ff6b6b" }}>red</span>.</p>
        <p>You can drag GIFs back and try again!</p>
        <button className="choice-btn" onClick={() => setShowIntro(false)}>▶ Start</button>
      </div>
    );
  }

  return (
    <div className="match-game-container">
      <h2>Level: {currentLevel.level}</h2>
      <p className="instructions">Drag each GIF to the matching statement.</p>

      <DragDropContext onDragEnd={handleDrop}>
        <div className="columns">
          {/* Left Column: Statement Boxes */}
          <div className="statements">
            {currentLevel.statements.map((statement) => (
              <Droppable droppableId={statement} key={statement}>
                {(provided) => {
                  const matchedGifId = Object.entries(matches).find(
                    ([, match]) => match === statement
                  )?.[0];

                  const gif = currentLevel.gifs.find((g) => g.id === matchedGifId);
                  const isCorrect = gif && matches[gif.id] === gif.matchText;

                  return (
                    <div
                      className={`statement-box ${
                        matchedGifId
                          ? isCorrect
                            ? "correct"
                            : "incorrect"
                          : ""
                      }`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <span className="statement-text">{statement}</span>
                      {gif && (
                        <Draggable draggableId={gif.id} index={0}>
                          {(provided) => (
                            <img
                              src={gif.gifUrl}
                              alt=""
                              className="matched-gif"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            />
                          )}
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            ))}
          </div>

          {/* Right Column: Gif Pool */}
          <Droppable droppableId="gifPool">
            {(provided) => (
              <div
                className="gif-pool"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {currentLevel.gifs.map((gif, index) => {
                  const match = matches[gif.id];
                  if (match && match !== "gifPool") return null;

                  return (
                    <Draggable draggableId={gif.id} index={index} key={gif.id}>
                      {(provided) => (
                        <img
                          className="gif-card"
                          src={gif.gifUrl}
                          alt=""
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      {allCorrect && (
        <div className="level-complete">
          <p>Level complete!</p>
          {levelIndex < levelData.length - 1 ? (
            <button
              className="next-level-btn"
              onClick={() => {
                setLevelIndex((i) => i + 1);
                setMatches({});
                setShowIntro(false);
              }}
            >
              ▶ Next Level
            </button>
          ) : (
            <p>You’ve matched all my skills!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SkillsMatchGame;
