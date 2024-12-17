import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanCard.scss';

const PlanCard = ({ badge, title, image, workouts, description, workoutPlan }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/workout-detail', { state: { workout: workoutPlan} });
    };

    return (
        <div className="plan-card" onClick={handleClick}>
            <div className="plan-card__image" style={{ backgroundImage: `url(${image})` }}>
                <div className="plan-card__overlay">
                    <span className="plan-card__badge">{badge}</span>
                    <h2 className="plan-card__title">{title}</h2>
                </div>
            </div>
            <div className="plan-card__content">
                <div className="plan-card__workouts">
                    <span className="plan-card__workouts-count">{workouts}</span>
                </div>
                <div className="plan-card__description">
                    {Array.isArray(description) 
                        ? description.map((text, index) => (
                            <p key={index} className="plan-card__description-item">{text.description}</p>
                        ))
                        : <p className="plan-card__description-item">{description[0].description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlanCard;