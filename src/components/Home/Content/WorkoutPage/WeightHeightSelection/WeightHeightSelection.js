import React, { useState } from 'react';
import './WeightHeightSelection.scss';

const WeightHeightSelection = ({ weight, height, weightUnit, heightUnit, setWeight, setHeight, setWeightUnit, setHeightUnit, onGoBack, onContinue }) => {
    const convertWeight = (value, unit) => {
        return unit === 'kg' ? (value / 2.205).toFixed(0) : (value * 2.205).toFixed(0);
    };

    const convertHeight = (value, unit) => {
        return unit === 'cm' ? (value * 30.48).toFixed(2) : (value / 30.48).toFixed(2);
    };

    const handleWeightUnitToggle = () => {
        const newUnit = weightUnit === 'kg' ? 'lbs' : 'kg';
        setWeightUnit(newUnit);
        setWeight(convertWeight(weight, newUnit));
    };

    const handleHeightUnitChange = () => {
        const newUnit = heightUnit === 'cm' ? 'ft' : 'cm';
        setHeightUnit(newUnit);
        setHeight(convertHeight(height, newUnit));
    };

    return (
        <div className="weight-height-selection">
            <h2>Input Some Parameter</h2>
            <div className="unit-toggle">
                <div className="weight-toggle">
                    <button
                        className={`weight ${weightUnit === 'kg' ? 'active' : ''}`}
                        onClick={handleWeightUnitToggle}
                    >
                        kg
                    </button>
                    <button
                        className={`weight ${weightUnit === 'lbs' ? 'active' : ''}`}
                        onClick={handleWeightUnitToggle}
                    >
                        lbs
                    </button>
                </div>
                <div className="height-toggle">
                    <button
                        className={`height ${heightUnit === 'cm' ? 'active' : ''}`}
                        onClick={handleHeightUnitChange}
                    >
                        cm
                    </button>
                    <button
                        className={`height ${heightUnit === 'ft' ? 'active' : ''}`}
                        onClick={handleHeightUnitChange}
                    >
                        ft
                    </button>
                </div>
            </div>

            <div className="body-info">
                <h2>Body information</h2>
                <div className="measurement">
                    <h3>Height</h3>
                    <div className="measurement-value">
                        <input
                            type="text"
                            value={height}
                            onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                setHeight(isNaN(value) ? '' : value);
                            }}
                        />
                        <div className="unit">{heightUnit}</div>
                    </div>
                </div>
                <div className="measurement">
                    <h3>Weight</h3>
                    <div className="measurement-value">
                        <input
                            type="text"
                            value={weight}
                            onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                setWeight(isNaN(value) ? '' : value);
                            }}
                        />
                        <div className="unit">{weightUnit}</div>
                    </div>
                </div>
            </div>
            <div className="navigation-buttons">
                <button className="go-back" onClick={onGoBack}>Go Back</button>
                <button className="continue" onClick={onContinue}>Continue</button>
            </div>
        </div>
    );
};

export default WeightHeightSelection;
