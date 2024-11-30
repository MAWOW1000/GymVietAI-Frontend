import React from "react";
import Wrapper from "./MealWrapper";
import { GiMuscleUp, GiMeat } from "react-icons/gi";
import { FaStar, FaFire, FaCarrot } from "react-icons/fa";

function Meal() {
  const chooses = [
    { id: 1, icon: <GiMuscleUp />, content: "Muscle Gain" },
    { id: 2, icon: <FaStar />, content: "Stay Toned" },
    { id: 3, icon: <FaFire />, content: "Loss Weight" }
  ];

  const types = [
    { id: 1, icon: <FaCarrot />, content: "Vegan" },
    { id: 2, icon: <GiMeat />, content: "Anything" }
  ];

  return (
    <Wrapper>
      <div className="container">
        <div className="choose">
          <h1>Purpose of the diet</h1>
          {chooses.map((choose) => (
            <React.Fragment key={choose.id}>
              <button type="button">
                {choose.icon}
                {choose.content}
              </button>
            </React.Fragment>
          ))}
        </div>
        
        <hr /> {/* Dấu gạch ngang */}

        <div className="write">
          <h1>Body information</h1>
          <div className="height">
            <h3>Height</h3>
            <input placeholder="cm" />
          </div>

          <div className="weight">
            <h3>Weight</h3>
            <input placeholder="kg" />
          </div>
        </div>

        <hr /> {/* Dấu gạch ngang */}

        <div className="goal">
          <h1>Goal weight</h1>
          <input placeholder="kg" />
        </div>

        <hr /> {/* Dấu gạch ngang */}

        <div className="time">
          <h1>Diet period</h1>
          <input placeholder="weeks" />
        </div>

        <hr /> {/* Dấu gạch ngang */}

        <div className="type">
          <h1>Types of vegan diets</h1>
          {types.map((type) => (
            <React.Fragment key={type.id}>
              <button type="button">
                {type.icon}
                {type.content}
              </button>
            </React.Fragment>
          ))}
        </div>

        <button className="summit">Generate Meal Plan By align</button>
      </div>
    </Wrapper>
  );
}

export default Meal;
