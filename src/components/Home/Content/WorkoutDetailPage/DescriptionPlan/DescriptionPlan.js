import "./DescriptionPlan.scss";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaDumbbell, FaClock } from 'react-icons/fa';

const DescriptionPlan = ({ workoutPlan }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lọc ra các ngày có bài tập thực sự (không phải ngày nghỉ)
    const workoutDays = workoutPlan?.workout_plan?.days?.filter(
        day => day.exercises[0]?.exercise_name
    ) || [];

    const getWorkoutStats = (exercises) => {
        const totalExercises = exercises.length;
        const estimatedTime = exercises.reduce((total, ex) =>
            total + (ex.sets * ex.rest * 1.5), 0) / 60; // Thời gian ước tính theo phút
        return { totalExercises, estimatedTime: Math.round(estimatedTime) };
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % workoutDays.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + workoutDays.length) % workoutDays.length);
    };

    if (!workoutDays.length) return null;

    const currentWorkout = workoutDays[currentSlide];
    const { totalExercises, estimatedTime } = getWorkoutStats(currentWorkout.exercises);

    return (
        <div className="description-plan">
            <div className="workout-counter">
                {currentWorkout.day} - Training Day
            </div>

            <div className="carousel-container">
                <button className="carousel-button prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>

                <div className="carousel-content">
                    <img
                        src={`https://media.musclewiki.com/media/uploads/chest_and_shou.jpg`}
                        alt="Workout demonstration"
                    />
                    <div className="workout-info">
                        <h2>Today's Workout Plan</h2>
                        <div className="workout-stats">
                            <div className="stat">
                                <FaDumbbell />
                                <span>{totalExercises} Exercises</span>
                            </div>
                            <div className="stat">
                                <FaClock />
                                <span>~{estimatedTime} mins</span>
                            </div>
                        </div>
                        <div className="exercise-preview">
                            {currentWorkout.exercises.slice(0, 3).map((exercise, idx) => (
                                <div key={idx} className="exercise-item">
                                    • {exercise.exercise_name}
                                </div>
                            ))}
                            {currentWorkout.exercises.length > 3 && (
                                <div className="exercise-item more">
                                    And {currentWorkout.exercises.length - 3} more...
                                </div>
                            )}
                        </div>
                        <button className="start-workout-button">
                            START WORKOUT
                        </button>
                    </div>
                </div>

                <button className="carousel-button next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

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
    );
};

export default DescriptionPlan;