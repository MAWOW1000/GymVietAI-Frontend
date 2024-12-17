import React from 'react';
import './Spinner.scss'; // Import the CSS for the spinner

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
