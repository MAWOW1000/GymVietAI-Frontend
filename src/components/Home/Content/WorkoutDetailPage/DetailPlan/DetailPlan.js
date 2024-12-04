import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./DetailPlan.scss";

const exercises = [
  {
    name: "Bodyweight Knee Push Ups",
    sets: "3 x 10",
    muscle: "Chest",
    level: "Novice",
    image: "/path/to/image1.jpg",
  },
  {
    name: "Band Pull Apart",
    sets: "4 x 15",
    muscle: "Shoulders",
    level: "Novice",
    image: "/path/to/image2.jpg",
  },
  {
    name: "Machine Hamstring Curl",
    sets: "2 x 8",
    muscle: "Hamstrings",
    level: "Novice",
    image: "/path/to/image3.jpg",
  },
];

const DetailPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const exercisesPerView = window.innerWidth <= 768 ? 1 : 3;
  
  const handlePrevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => 
      Math.min(prev + 1, Math.ceil(exercises.length / exercisesPerView) - 1)
    );
  };

  return (
    <div className="detail-plan">
      <div className="detail-plan__header">
        <h2 className="detail-plan__title">
          <span className="highlight">4</span> Exercises in this Workout
        </h2>
        <span className="detail-plan__showing">Showing 2 to 4 of 4</span>
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
              className={`exercise-item ${currentSlide === Math.floor(index / exercisesPerView) ? 'active' : ''}`}
            >
              <div className="exercise-item__image-wrapper">
                <img src={exercise.image} alt={exercise.name} />
                <div className="exercise-item__overlay">
                  <span className="exercise-item__sets">{exercise.sets}</span>
                </div>
              </div>
              <div className="exercise-item__info">
                <h3 className="exercise-name">{exercise.name}</h3>
                <div className="exercise-tags">
                  <span className="tag tag--muscle">{exercise.muscle}</span>
                  <span className="tag tag--level">{exercise.level}</span>
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