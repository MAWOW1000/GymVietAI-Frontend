import React from 'react';
import { useLocation } from 'react-router-dom';
import './WorkoutDetailPage.scss';
import DescriptionPlan from './DescriptionPlan/DescriptionPlan';
import DetailPlan from './DetailPlan/DetailPlan';
import WorkoutModal from './WorkoutModal/WorkoutModal';

const WorkoutDetailPage = () => {
    const location = useLocation();
    const workoutPlan = location.state?.workout?.plan;


    return (
        <div className="workout-detail-page">
            <div className="workout-detail-page__container container">
                <div className="row workout-detail-page__title">
                    <span>{workoutPlan?.workout_plan?.training_split}</span>
                </div>
                <div className="workout-detail-page__content row">
                    <div className="content-title">
                        <span>{workoutPlan?.workout_plan?.goal}</span>
                    </div>

                    <div className="content-main row">
                        <div className="content-main__plan col-8">
                            <div className="content-main__plan-description ">
                                <DescriptionPlan workoutPlan={workoutPlan} />
                            </div>
                            <div className="content-main__plan-detail">
                                <DetailPlan />
                            </div>
                        </div>

                        <div className="content-main__modal col-4">
                            <WorkoutModal selectedMuscle={workoutPlan?.workout_plan?.muscle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage; 