import React from 'react';
import './PlanWorkoutPage.scss';
import PlanCard from './PlanCard/PlanCard';
import { useLocation } from 'react-router-dom';


const PlanWorkoutPage = () => {
    const location = useLocation();
    // const workoutPlans = [];
    // workoutPlans.push(location.state?.workoutPlan);
    const workoutPlan = location.state?.workoutPlan;

    return (
        <div className="plan-workout-page row">
            <h1>Plan Your Workout</h1>
            <div className="plan-card-container col-md-4">
                <PlanCard
                    badge={workoutPlan.training_level}
                    title={workoutPlan.training_split}
                    image={'https://media.musclewiki.com/media/uploads/Copy_of_Untitled.jpg'}
                    workouts={workoutPlan.goal}
                    description={workoutPlan.ImportantConsiderations}
                    workoutPlan={workoutPlan}
                />
            </div>
        </div>
    );
};

export default PlanWorkoutPage;
