import React, { useState } from 'react';
import { FaMars, FaWeight, FaBirthdayCake, FaGlobe, FaBook } from 'react-icons/fa';
import './WorkoutPage.scss';
import GenderSelection from './GenderSelection/GenderSelection';
import WeightHeightSelection from './WeightHeightSelection/WeightHeightSelection';
import BirthdaySelection from './BirthdaySelection/BirthdaySelection';
import ContinentSelection from './ContinentSelection/ContinentSelection';
import SummaryPage from './SummaryPage/SummaryPage';

const WorkoutPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightUnit, setHeightUnit] = useState('cm');

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
        setActiveStep(1);
    };

    const handleContinentClick = (continent) => {
        setSelectedContinent(continent);
        setActiveStep(4);
    };

    const handleGoBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleContinue = () => {
        setActiveStep(activeStep + 1);
    };

    const handleGenerativeClick = () => {
        // Implement generative functionality here
    };

    return (
        <div className="workout-page">
            <div className='progress-bar-container'>
                <div className="custom-progress-bar">
                    {[FaMars, FaWeight, FaBirthdayCake, FaGlobe, FaBook].map((Icon, index) => (
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

            {/* <h1 className="title">LETS GET STARTED</h1> */}

            {activeStep === 0 && (
                <GenderSelection selectedGender={selectedGender} onGenderClick={handleGenderClick} />
            )}
            {activeStep === 1 && (
                <WeightHeightSelection
                    weight={weight}
                    height={height}
                    weightUnit={weightUnit}
                    heightUnit={heightUnit}
                    setWeight={setWeight}
                    setHeight={setHeight}
                    setWeightUnit={setWeightUnit}
                    setHeightUnit={setHeightUnit}
                    onGoBack={handleGoBack}
                    onContinue={handleContinue}
                />
            )}
            {activeStep === 2 && (
                <BirthdaySelection
                    age={age}
                    setAge={setAge}
                    onGoBack={handleGoBack}
                    onContinue={handleContinue}
                />
            )}
            {activeStep === 3 && (
                <ContinentSelection selectedContinent={selectedContinent} onContinentClick={handleContinentClick} />
            )}
            {activeStep === 4 && (
                <SummaryPage
                    selectedGender={selectedGender}
                    selectedContinent={selectedContinent}
                    age={age}
                    weight={weight}
                    height={height}
                    weightUnit={weightUnit}
                    heightUnit={heightUnit}
                    onGenerativeClick={handleGenerativeClick}
                    onGoBack={handleGoBack}
                />
            )}
        </div>
    );
};

export default WorkoutPage;
