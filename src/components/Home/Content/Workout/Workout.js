import React, { useState } from "react";
import Wrapper from "./WorkoutWrapper";
import { FaTransgender, FaBirthdayCake, FaMedal, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Age from "./Age/Age";
import Goal from "./Goal/Goal";
import Equipment from "./Equipment/Equipment";
import Level from "./Level/Level";
import Muscle from "./Muscle/Muscle";
import Gender from "./Gender/Gender";

function Workout() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, icon: <FaTransgender />, component: <Gender /> },
        { id: 2, icon: <FaBirthdayCake />, component: <Age /> },
        { id: 3, icon: <FaMedal />, component: <Goal /> },
        { id: 4, icon: <AiFillThunderbolt />, component: <Level /> },
        { id: 5, icon: <FaDumbbell />, component: <Equipment /> },
        { id: 6, icon: <FaHeartbeat />, component: <Muscle /> }
    ];

    const handleStepClick = (stepId) => {
        setCurrentStep(stepId); // Cập nhật bước hiện tại
    };

    return (
        <Wrapper>
            <div className="progress-container">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Nút bước */}
                        <button
                            type="button"
                            className={`step ${currentStep >= step.id ? "active" : ""}`}
                            onClick={() => handleStepClick(step.id)}
                        >
                            {step.icon}
                        </button>

                        {/* Đường nối giữa các bước */}
                        {index < steps.length - 1 && (
                            <div
                                className={`line ${
                                    currentStep > step.id ? "completed" : ""
                                }`}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Hiển thị component của bước hiện tại */}
            <div className="step-content">
                {steps.find((step) => step.id === currentStep)?.component}
            </div>
        </Wrapper>
    );
}

export default Workout;
