import React from 'react';
import './ContinentSelection.scss';

const ContinentSelection = ({ selectedContinent, onContinentClick }) => {
  return (
    <div className="continent-selection">
      <button
        className={`continent-button europe ${selectedContinent === 'europe' ? 'selected' : ''}`}
        onClick={() => onContinentClick('europe')}
      >
        Europe
      </button>
      <button
        className={`continent-button asian ${selectedContinent === 'asian' ? 'selected' : ''}`}
        onClick={() => onContinentClick('asian')}
      >
        Asian
      </button>
    </div>
  );
};

export default ContinentSelection; 