import React, { useState } from 'react';
import './WeightHeightSelection.scss';

const WeightHeightSelection = () => {
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weight, setWeight] = useState(88);
    const [height, setHeight] = useState(178);

    const convertWeight = (value, unit) => {
        return unit === 'kg' ? value * 2.20462 : value / 2.20462;
    };

    const convertHeight = (value, unit) => {
        return unit === 'cm' ? value / 30.48 : value * 30.48;
    };

    const handleWeightUnitToggle = () => {
        const newUnit = weightUnit === 'kg' ? 'lbs' : 'kg';
        setWeightUnit(newUnit);
        setWeight(convertWeight(weight, newUnit));
    };

    const handleHeightUnitChange = () => {
        const newUnit = heightUnit === 'cm' ? 'feet' : 'cm';
        setHeightUnit(newUnit);
        setHeight(convertHeight(height, newUnit));
    };

    return (
        <div className="weight-height-selection">
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
                        className={`height ${heightUnit === 'feet' ? 'active' : ''}`}
                        onClick={handleHeightUnitChange}
                    >
                        feet
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
                            value={height.toFixed(2)}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                        />
                        <div className="unit">{heightUnit}</div>
                    </div>
                </div>
                <div className="measurement">
                    <h3>Weight</h3>
                    <div className="measurement-value">
                        <input
                            type="text"
                            value={weight.toFixed(2)}
                            onChange={(e) => setWeight(parseFloat(e.target.value))}
                        />
                        <div className="unit">{weightUnit}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightHeightSelection;
