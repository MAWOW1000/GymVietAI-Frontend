import React from 'react';

const AllergensForm = ({ selectedAllergens, onAllergenToggle }) => {
  const allergens = [
    'none',
    'nuts',
    'peanuts',
    'dairy',
    'eggs',
    'soy',
    'fish',
    'shellfish',
    'wheat',
    'sesame'
  ];

  const isSelected = (allergen) => selectedAllergens.includes(allergen);

  const getButtonLabel = (allergen) => {
    switch (allergen) {
      case 'none':
        return 'No Allergies';
      default:
        return allergen.charAt(0).toUpperCase() + allergen.slice(1);
    }
  };

  return (
    <div>
      <p className="text-muted mb-3">Select your food allergies:</p>
      <div className="d-flex flex-wrap gap-2">
        {allergens.map((allergen) => (
          <button
            key={allergen}
            type="button"
            className={`btn ${
              isSelected(allergen)
                ? 'btn-primary'
                : 'btn-outline-primary'
            } allergen-btn`}
            onClick={() => onAllergenToggle(allergen)}
          >
            {getButtonLabel(allergen)}
          </button>
        ))}
      </div>
      <small className="form-text text-muted mt-2">
        {selectedAllergens.includes('none') 
          ? 'Click any option to remove "No Allergies" and start selecting specific allergies'
          : 'Select "No Allergies" to clear all selections'}
      </small>
    </div>
  );
};

export default AllergensForm;
