import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./DetailPlan.scss";
import { useDispatch, useSelector } from "react-redux";
import { setExercise, setGender } from "../../../../../redux/slices/exerciseSlice";
import { useNavigate } from "react-router-dom";

const DetailPlan = ({ workoutAllDays, currentExercise }) => {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.exercise.gender);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleExercises, setVisibleExercises] = useState([]);
  const exercisesPerView = window.innerWidth <= 768 ? 1 : 3;

  const workoutDays = workoutAllDays || [];

  let currentWorkout = workoutDays[currentExercise];

  let exercises = currentWorkout?.WorkoutExercises || [];

  useEffect(() => {
    const startIdx = currentSlide * exercisesPerView;
    const endIdx = startIdx + exercisesPerView;
    setVisibleExercises(exercises.slice(startIdx, endIdx));
  }, [currentSlide, exercises, exercisesPerView]);

  useEffect(() => setCurrentSlide(0), [currentExercise]);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev =>
      Math.min(prev + 1, visibleExercises.length - 1)
    );
  };

  const handleViewDetail = (exercise) => {
    if (exercise?.Exercise.name === "Rest") return;
    else {
      dispatch(setExercise(exercise.Exercise));
      dispatch(setGender(gender));
      navigate('/information');
    }
  }

  return (
    <div className="detail-plan">
      <div className="detail-plan__header">
        <h2 className="detail-plan__title">
          <span className="highlight">{exercises.length}</span> EXERCISES IN THIS WORKOUT
        </h2>
        <span className="detail-plan__showing">Showing {currentSlide * exercisesPerView + 1} to {Math.min((currentSlide + 1) * exercisesPerView, exercises.length)} of {exercises.length}</span>
      </div>

      <div className="detail-plan__content">
        <button
          className="nav-button nav-button--prev"
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
        >
          <IoChevronBack />
        </button>

        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className={`exercise-item ${visibleExercises.includes(exercise) ? 'active' : ''} ${exercise?.Exercise.name === "Rest" ? 'rest' : ''}`}
              onClick={() => handleViewDetail(exercise)}
            >
              <div className="exercise-item__image-wrapper">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={gender ? exercise.Exercise.video_female?.split(',')[0].trim() : exercise.Exercise.video_male?.split(',')[0].trim()}
                  alt={exercise.Exercise.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

              </div>
              <div className="exercise-item__info">
                <span className="exercise-name">{exercise?.Exercise.name}</span>
                <div className="exercise-tags">
                  {exercise?.Exercise.name === "Rest" ?
                    <>
                      <span className="tag tag--reps">Light activity or rest</span>
                      <span className="tag tag--muscle">Recover for next workout</span>
                      <span className="tag tag--level">All levels</span>
                    </>
                    :
                    <>
                      <span className="tag tag--reps">{exercise?.reps}</span>
                      <span className="tag tag--muscle">{exercise?.Exercise.GroupMuscle.name}</span>
                      <span className="tag tag--level">{exercise?.Exercise.Difficulty.name}</span>
                    </>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-button nav-button--next"
          onClick={handleNextSlide}
          disabled={currentSlide >= Math.ceil(exercises.length / exercisesPerView) - 1}
        >
          <IoChevronForward />
        </button>
      </div>

      <div className="detail-plan__indicators">
        {[...Array(Math.ceil(exercises.length / exercisesPerView))].map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPlan;