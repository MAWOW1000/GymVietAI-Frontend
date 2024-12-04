import React from 'react';
import './PlanWorkoutPage.scss';
import PlanCard from './PlanCard/PlanCard';
import { useLocation } from 'react-router-dom';


const PlanWorkoutPage = () => {
    const location = useLocation();
    const workoutPlans = [];
    workoutPlans.push(location.state?.workoutPlan);

    return (
        <div className="plan-workout-page row">
            <h1>Plan Your Workout</h1>
            {workoutPlans.map((plan, index) => (
                <div className="plan-card-container col-md-4" key={index}>
                    <PlanCard
                        badge={plan.workout_plan.training_level}
                        title={plan.workout_plan.training_split}
                        image={'https://media.musclewiki.com/media/uploads/Copy_of_Untitled.jpg'}
                        workouts={plan.workout_plan.goal}
                        description={plan.workout_plan.important_considerations}
                        plan={plan}
                    />
                </div>
            ))}
        </div>
    );
};

export default PlanWorkoutPage;
