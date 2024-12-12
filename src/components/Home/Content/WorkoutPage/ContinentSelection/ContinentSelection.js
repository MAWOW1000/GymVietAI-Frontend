import React from 'react';
import './ContinentSelection.scss';

const ContinentSelection = ({ selectedContinent, onContinentClick }) => {
  return (
    <div className="continent-selection">
      <h2>Where Are You From?</h2>
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