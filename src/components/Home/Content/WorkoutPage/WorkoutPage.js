import React, { useState } from 'react';
import { FaMars, FaWeight, FaBirthdayCake, FaGlobe } from 'react-icons/fa';
import './WorkoutPage.scss';
import GenderSelection from './GenderSelection/GenderSelection';
import WeightHeightSelection from './WeightHeightSelection/WeightHeightSelection';

const WorkoutPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedGender, setSelectedGender] = useState(null);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
        setActiveStep(1);
    };

    return (
        <div className="workout-page">
            <div className='progress-bar-container'>
                <div className="custom-progress-bar">
                    {[FaMars, FaWeight, FaBirthdayCake, FaGlobe].map((Icon, index) => (
                        <div
                            key={index}
                            className={`step ${activeStep >= index ? 'active' : ''} ${activeStep > index ? 'activeProgress' : ''}`}
                            onClick={() => handleStepClick(index)}
                        >
                            <Icon />
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="title">LETS GET STARTED</h1>

            {activeStep === 0 && (
                <GenderSelection selectedGender={selectedGender} onGenderClick={handleGenderClick} />
            )}
            {activeStep === 1 && (
                <WeightHeightSelection />
            )}
        </div>
    );
};

export default WorkoutPage;
