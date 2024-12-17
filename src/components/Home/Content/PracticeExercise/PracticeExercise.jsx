import { useLocation } from 'react-router-dom';
import InforExercisePage from '../InforExercisePage/InforExercisePage';
import './PracticeExercise.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExercise } from '../../../../redux/slices/exerciseSlice';

const PracticeExercise = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const exercises = location.state?.workoutExercises || [];
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const exercise = exercises[currentExerciseIndex].Exercise;
    useEffect(() => {
        dispatch(setExercise(exercise));
    }, [exercise])

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
            <div className='trackingExercise container'>
                <div className="exercise-carousel">
                    <div className="carousel-header">
                        <span>
                            {exercises[currentExerciseIndex].Exercise.name}: {' '} {exercises[currentExerciseIndex].sets}
                            {' '} set, {'  '}
                            {exercises[currentExerciseIndex].reps.includes('rep') ?
                                exercises[currentExerciseIndex].reps
                                :
                                (exercises[currentExerciseIndex].reps + 'rep')}
                            {',  '}
                            {exercises[currentExerciseIndex].rest}s rest
                        </span>
                    </div>
                    <div className="carousel-controls">
                        <button className="prev-button" onClick={handlePrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 text-white rtl:hidden ltr:block"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${((currentExerciseIndex + 1) / (exercises.length)) * 100}%` }}
                            ></div>
                        </div>
                        <button className="next-button" onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 text-white ltr:hidden rtl:block"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="exercise-labels">
                        {exercises.map((exercise, index) => (
                            <div key={index} className="exercise-label">
                                {exercise.Exercise.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='inforExercise'>
                <InforExercisePage />
            </div>
        </div>
    );
}

export default PracticeExercise;