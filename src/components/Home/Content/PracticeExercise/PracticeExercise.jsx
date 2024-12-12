import InforExercisePage from '../InforExercisePage/InforExercisePage';
import './PracticeExercise.scss';
import React, { useState } from 'react';

const exercises = [
    'Barbell Bench Press',
    'Barbell Incline Bench Press',
    'Dumbbell Seated Overhead Press',
    'Dumbbell Bayesian Lateral Raise',
    // Add more exercises here
];

const PracticeExercise = () => {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    const handleNext = () => {
        setCurrentExerciseIndex((prevIndex) =>
            (prevIndex + 1) % exercises.length
        );
    };

    const handlePrevious = () => {
        setCurrentExerciseIndex((prevIndex) =>
            (prevIndex - 1 + exercises.length) % exercises.length
        );
    };
    return (
        <div className="practice-exercise">
            <div className='trackingExercise'>
                <div className="exercise-carousel">
                    <div className="carousel-header">
                        <span>3x5-8 Reps</span>
                    </div>
                    <div className="carousel-controls">
                        <button className="prev-button" onClick={handlePrevious}>
                            Previous
                        </button>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${(currentExerciseIndex / (exercises.length - 1)) * 100}%` }}
                            ></div>
                        </div>
                        <button className="next-button" onClick={handleNext}>
                            Next
                        </button>
                    </div>

                    <div className="exercise-labels">
                        {exercises.map((exercise, index) => (
                            <div key={index} className="exercise-label">
                                {exercise}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className='inforExercise'>
            <InforExercisePage />
        </div> */}
        </div>
    );
}

export default PracticeExercise;