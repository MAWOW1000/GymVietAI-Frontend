import React from 'react';
import './GenderSelection.scss';

const GenderSelection = ({ selectedGender, onGenderClick }) => {
  return (
    <div className="gender-selection">
      <h2>Let Get Started</h2>
      <button
        className={`gender-button male ${selectedGender === 'male' ? 'selected' : ''}`}
        onClick={() => onGenderClick('male')}
      >
        Male
      </button>
      <button
        className={`gender-button female ${selectedGender === 'female' ? 'selected' : ''}`}
        onClick={() => onGenderClick('female')}
      >
        Female
      </button>
    </div>
  );
};

export default GenderSelection; 