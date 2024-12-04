import React from 'react';
import './SummaryPage.scss';
import { postCreateExercise } from '../../../../../util/exerciseAxios/exerciseApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SummaryPage = ({
    selectedGender,
    selectedContinent,
    age,
    weight,
    height,
    weightUnit,
    heightUnit,
    onGenerativeClick,
    onGoBack
}) => {
    const navigate = useNavigate();

    const handleGenerativeClick = async () => {
        try {
            // Format weight and height
            const formattedWeight = weight.toFixed(0);
            const formattedHeight = (height / 100).toFixed(2);

            // Call API to create exercise
            const response = await postCreateExercise(
                selectedGender,
                formattedWeight,
                formattedHeight,
                age,
                selectedContinent,
                'en'
            );
            console.log('Exercise created:', response);

            // Handle response
            if (response.EC === 0) {
                toast.success(response.EM, { autoClose: 2000 });
                if (onGenerativeClick) onGenerativeClick(response);
                navigate('/planworkout', { state: { workoutPlan: response.DT } });
            } else {
                toast.error(response.EM, { autoClose: 2000 });
            }
        } catch (error) {
            console.error('Error creating exercise:', error);
            toast.error('Error creating exercise: ' + error.message, { autoClose: 2000 });
        }
    };

    return (
        <div className="summary-page">
            <h2>Summary</h2>
            <p>Gender: {selectedGender}</p>
            <p>Continent: {selectedContinent}</p>
            <p>Age: {age}</p>
            <p>Weight: {weight.toFixed(0)} {weightUnit}</p>
            <p>Height: {(height / 100).toFixed(2)} {heightUnit}</p>
            <button className="go-back" onClick={onGoBack}>Go Back</button>
            <button className="generative-button" onClick={handleGenerativeClick}>Generative</button>
        </div>
    );
};

export default SummaryPage; 