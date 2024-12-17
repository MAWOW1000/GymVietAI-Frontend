import React, { useState } from 'react';
import './BirthdaySelection.scss';

const BirthdaySelection = ({ age, setAge, onGoBack, onContinue }) => {
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="birthday-selection">
            <h2>How Old Are You?</h2>
            <div className="age-slider">
                <input
                    type="number"
                    value={age}
                    onChange={handleAgeChange}
                    min="0"
                    max="100"
                />
                <input
                    type="range"
                    value={age}
                    onChange={handleAgeChange}
                    min="0"
                    max="100"
                />
            </div>
            <div className="navigation-buttons">
                <button className="go-back" onClick={onGoBack}>Go Back</button>
                <button className="continue" onClick={onContinue}>Continue</button>
            </div>
        </div>
    );
};

export default BirthdaySelection; 