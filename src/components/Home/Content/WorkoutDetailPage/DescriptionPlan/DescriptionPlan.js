import "./DescriptionPlan.scss";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaDumbbell, FaClock } from 'react-icons/fa';

const DescriptionPlan = ({ workoutAllDays, currentSlide, setCurrentSlide }) => {

    const workoutDays = workoutAllDays || [];

    let currentWorkout = workoutDays[currentSlide];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % workoutDays?.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + workoutDays.length) % workoutDays?.length);
    };

    const getWorkoutStats = (exercises) => {
        const totalExercises = exercises.length;
        const estimatedTime = exercises.reduce((total, ex) => {
            // Parse reps more safely
            const numberReps = Number(ex.reps.split('-')[0]) || 0;
            const numberSets = Number(ex.sets) || 3;
            const numberRest = Number(ex.rest) || 60;
            // Calculate time in minutes: (sets * reps * 30 seconds + sets * rest) / 60
            let exerciseTime = ((numberSets * numberReps * 30) + (numberSets * numberRest)) / 60;
            if (exerciseTime < 10) exerciseTime = 0;
            // console.log({
            //     reps: ex.reps,
            //     numberReps,
            //     sets: ex.sets,
            //     rest: ex.rest,
            //     exerciseTime
            // }); // Debug logging

            return total + exerciseTime;
        }, 0);

        return {
            totalExercises,
            estimatedTime: Math.round(estimatedTime)
        };
    };

    const { totalExercises, estimatedTime } = getWorkoutStats(currentWorkout.WorkoutExercises);

    return (
        <div className="description-plan">
            <div className="workout-counter">
                <span>Day {currentSlide + 1}</span> / {workoutDays.length} of Week
            </div>

            <div className="carousel-container">
                <button className="carousel-button prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>

                <div className="carousel-content">
                    <img
                        src={currentWorkout.imageUrl || 'https://media.musclewiki.com/media/uploads/chest_and_shou.jpg'}
                        alt="Workout demonstration"
                    />
                    <div className="workout-info">
                        <h2>Day {currentSlide + 1} Workout Plan</h2>
                        <div className="workout-stats">
                            <div className="stat">
                                <FaDumbbell />
                                <span>{totalExercises} Exercises</span>
                            </div>
                            <div className="stat">
                                <FaClock />
                                <span>About {estimatedTime || 0} mins</span>
                            </div>
                        </div>
                        <div className="exercise-preview">
                            {currentWorkout.WorkoutExercises.map((exercise, idx) => (
                                <div key={idx} className="exercise-item">
                                    • {exercise.Exercise.name}
                                </div>
                            ))}
                        </div>
                        <button className="start-workout-button">
                            START WORKOUT
                        </button>
                    </div>
                </div>

                <button className="carousel-button next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>

                <div className="carousel-dots">
                    {workoutDays.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DescriptionPlan;