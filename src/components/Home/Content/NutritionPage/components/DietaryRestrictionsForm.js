import React from 'react';

const DietaryRestrictionsForm = ({ selectedRestrictions, onRestrictionChange }) => {
  const restrictions = [
    'none',
    'vegetarian',
    'vegan',
    'gluten_free',
    'dairy_free'
  ];

  const isSelected = (restriction) => selectedRestrictions.includes(restriction);

  const getButtonLabel = (restriction) => {
    switch (restriction) {
      case 'none':
        return 'No Restrictions';
      case 'gluten_free':
        return 'Gluten Free';
      case 'dairy_free':
        return 'Dairy Free';
      default:
        return restriction.charAt(0).toUpperCase() + restriction.slice(1);
    }
  };

  return (
    <div>
      <p className="text-muted mb-3">Select your dietary restrictions:</p>
      <div className="d-flex flex-wrap gap-2">
        {restrictions.map((restriction) => (
          <button
            key={restriction}
            type="button"
            className={`btn ${
              isSelected(restriction)
                ? 'btn-primary'
                : 'btn-outline-primary'
            } allergen-btn`}
            onClick={() => onRestrictionChange(restriction)}
          >
            {getButtonLabel(restriction)}
          </button>
        ))}
      </div>
      <small className="form-text text-muted mt-2">
        {selectedRestrictions.includes('none') 
          ? 'Click any option to remove "No Restrictions" and start selecting specific restrictions'
          : 'Select "No Restrictions" to clear all selections'}
      </small>
    </div>
  );
};

export default DietaryRestrictionsForm;
