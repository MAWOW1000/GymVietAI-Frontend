import React from "react";
import Wrapper from "./ToolWrapper";
import { GiGymBag } from "react-icons/gi";

function Tool() {
  const tools = [
    { id: 1, logo: <GiGymBag />, name: "Select All" },
    { id: 2, logo: <GiGymBag />, name: "Barbell" },
    { id: 3, logo: <GiGymBag />, name: "Dumbbell" },
    { id: 4, logo: <GiGymBag />, name: "Body" },
    { id: 5, logo: <GiGymBag />, name: "Machine" },
    { id: 6, logo: <GiGymBag />, name: "Kettlebells" }, 
    { id: 7, logo: <GiGymBag />, name: "Cables" },
    { id: 8, logo: <GiGymBag />, name: "Band" }
  ];

  return (
    <Wrapper>
      <div className="container">
        {tools.map((tool) => (
          <div key={tool.id} className="level-item">
            <button className="level-button">
              <span className="icon">{tool.logo}</span>
              <span>{tool.name}</span>
            </button>
          </div>
        ))}
      </div>

      <div className='nav'>
            <button type='Button' className='back'>Go back</button>
            <button type='Button'>Next</button> 
        </div>
    </Wrapper>
  );
}

export default Tool;
