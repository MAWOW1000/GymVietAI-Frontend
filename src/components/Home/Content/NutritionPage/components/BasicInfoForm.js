import React from 'react';

const BasicInfoForm = ({ formData, onInputChange }) => {
  const goals = [
    'Loss Weight',
    'Stay Fit',
    'Muscle Gain'
  ];

  const activityLevels = [
    'Sedentary',
    'Lightly Active',
    'Moderately Active',
    'Active',
    'Very Active'
  ];

  const renderHelperText = (field) => {
    switch (field) {
      case 'Weight':
        return 'Enter your current weight in kilograms';
      case 'Height':
        return 'Enter your height in meters (e.g., 1.75)';
      case 'Age':
        return 'Enter your age in years';
      case 'Gender':
        return 'Select your biological gender';
      case 'Goal':
        return 'Choose your primary fitness goal';
      case 'ActivityLevel':
        return 'Select your typical activity level';
      default:
        return '';
    }
  };

  return (
    <div className="basic-info-form">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="Weight"
                name="Weight"
                value={formData.Weight}
                onChange={onInputChange}
                required
                min="30"
                max="300"
                step="0.1"
              />
              <label htmlFor="Weight">Weight (kg)</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('Weight')}</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="Height"
                name="Height"
                value={formData.Height}
                onChange={onInputChange}
                required
                min="1"
                max="3"
                step="0.01"
              />
              <label htmlFor="Height">Height (m)</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('Height')}</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="Age"
                name="Age"
                value={formData.Age}
                onChange={onInputChange}
                required
                min="13"
                max="100"
              />
              <label htmlFor="Age">Age</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('Age')}</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <select
                className="form-select"
                id="Gender"
                name="Gender"
                value={formData.Gender}
                onChange={onInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label htmlFor="Gender">Gender</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('Gender')}</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <select
                className="form-select"
                id="Goal"
                name="Goal"
                value={formData.Goal}
                onChange={onInputChange}
                required
              >
                <option value="">Select Goal</option>
                {goals.map(goal => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
              <label htmlFor="Goal">Goal</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('Goal')}</small>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="form-floating">
              <select
                className="form-select"
                id="ActivityLevel"
                name="ActivityLevel"
                value={formData.ActivityLevel}
                onChange={onInputChange}
                required
              >
                <option value="">Select Activity Level</option>
                {activityLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <label htmlFor="ActivityLevel">Activity Level</label>
            </div>
            <small className="form-text text-muted">{renderHelperText('ActivityLevel')}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
