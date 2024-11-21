import React, { useState } from "react";
import Wrapper from "./SelectWrapper";
import { IoIosCloseCircle } from "react-icons/io"; 
import { BsQuestionCircle } from "react-icons/bs";

function Select() {
  const levels = [
    { id: 1, level: "Novice", disclaimer: "I am the bone of my sword", description: ["New to lifting and fitness", "No prior experience in gym"] },
    { id: 2, level: "Beginner", disclaimer: "Steal is my body", description: ["New to lifting and fitness", "No prior experience in gym"] },
    { id: 3, level: "Intermediate", disclaimer: "And fire is my blood", description: ["New to lifting and fitness", "No prior experience in gym"] },
    { id: 4, level: "Advanced", disclaimer: "I have created over a thousand blades", description: ["New to lifting and fitness", "No prior experience in gym"] },
  ];

  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelClick = (level) => {
    console.log(`Button clicked for level: ${level.level}`);
    // Xử lý sự kiện khi bấm vào nút chính
  };

  const handleIconClick = (level) => {
    setSelectedLevel(level); 
  };

  const handleClosePopup = () => {
    setSelectedLevel(null);
  };

  return (
    <Wrapper>
      <div className="container">
        {levels.map((level) => (
          <div key={level.id} className="level-item">
            <button className="level-button" onClick={() => handleLevelClick(level)}>
              {level.level}
            </button>
            <BsQuestionCircle
              className="info-icon"
              onClick={() => handleIconClick(level)}
            />
          </div>
        ))}

        {selectedLevel && (
          <div className="popup">
            <div className="popup-content">
              <IoIosCloseCircle className="close-popup-icon" onClick={handleClosePopup} />
              <h2>FITNESS LEVEL</h2>
              <div className="disclaimer-section">
                <h4>Disclaimer</h4>
                <p>{selectedLevel.disclaimer}</p>
                </div>
              <h3>{selectedLevel.level}</h3>
              <ul>
                {selectedLevel.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Select;
