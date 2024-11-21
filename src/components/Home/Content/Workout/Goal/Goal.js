import React from "react";
import Wrapper from "./GoalWrapper";

function Goal(){
    const goals = [
        {id: 1, goal: "Lose Weight"},
        {id: 2, goal: "Gain Streght"},
        {id: 3, goal: "Gain Muscle"}
    ]

    return(
        <Wrapper>
            <div className="container">
            <h1>YOUR FITNESS GOAL?</h1>

                {goals.map((step, id) => (
                    <React.Fragment key={step.id}>
                    <button type="button">
                        {step.goal}
                    </button>
                </React.Fragment>
                ))}
            </div>
        </Wrapper>
    )
}

export default Goal;