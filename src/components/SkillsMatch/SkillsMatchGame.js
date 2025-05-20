import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import levelData from "./levelsData";
import "./SkillsMatchGame.css";

function SkillsMatchGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [matches, setMatches] = useState({});
  const currentLevel = levelData[levelIndex];

  const handleDrop = (result) => {
    if (!result.destination) return;

    const draggedGifId = result.draggableId;
    const matchedStatement = result.destination.droppableId;

    setMatches((prev) => ({
      ...prev,
      [draggedGifId]: matchedStatement,
    }));
  };

  const isMatchCorrect = (gif) => matches[gif.id] === gif.matchText;

  const allCorrect = currentLevel.gifs.every((gif) => isMatchCorrect(gif));

  return (
    <div className="match-game-container">
      <h2>Level: {currentLevel.level}</h2>
      <p className="instructions">Drag each GIF to the statement it matches!</p>
      <DragDropContext onDragEnd={handleDrop}>
        <div className="columns">
          <div className="statements">
            {currentLevel.statements.map((statement, index) => (
              <Droppable droppableId={statement} key={statement}>
                {(provided) => (
                  <div
                    className="statement-box"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {statement}
                    {Object.entries(matches)
                      .filter(([, match]) => match === statement)
                      .map(([gifId]) => {
                        const gif = currentLevel.gifs.find((g) => g.id === gifId);
                        return (
                          <img
                            key={gifId}
                            src={gif.gifUrl}
                            alt=""
                            className="matched-gif"
                          />
                        );
                      })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>

          <Droppable droppableId="gifPool" isDropDisabled>
            {(provided) => (
              <div className="gif-pool" ref={provided.innerRef} {...provided.droppableProps}>
                {currentLevel.gifs.map((gif, index) => (
                  !matches[gif.id] && (
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
                  )
                ))}
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
            <button onClick={() => {
              setLevelIndex((i) => i + 1);
              setMatches({});
            }}>Next Level</button>
          ) : (
            <p>You’ve matched all my skills!</p>
                      )}
        </div>
      )}
    </div>
  );
}

export default SkillsMatchGame;