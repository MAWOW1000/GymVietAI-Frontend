import React from 'react';
import './GenderSelection.scss';

const GenderSelection = ({ selectedGender, onGenderClick }) => {
  return (
    <div className="gender-selection">
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