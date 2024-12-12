import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkoutDetailPage.scss';
import DescriptionPlan from './DescriptionPlan/DescriptionPlan';
import DetailPlan from './DetailPlan/DetailPlan';
import WorkoutModal from './WorkoutModal/WorkoutModal';

const WorkoutDetailPage = () => {
    const location = useLocation();
    const workoutPlan = location.state?.workout;
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="workout-detail-page">
            <div className="workout-detail-page__container container">
                <div className="row workout-detail-page__title">
                    <span>{workoutPlan?.training_split}</span>
                </div>
                <div className="workout-detail-page__content row">
                    <div className="content-title">
                        <span>{workoutPlan?.goal}</span>
                    </div>

                    <div className="content-main row">
                        <div className="content-main__plan row col-8">
                            <div className="content-main__plan-description col-12">
                                <DescriptionPlan
                                    workoutAllDays={workoutPlan.WorkoutDays}
                                    currentSlide={currentSlide}
                                    setCurrentSlide={setCurrentSlide}
                                />
                            </div>
                            <div className="content-main__plan-detail col-12">
                                <DetailPlan
                                    workoutAllDays={workoutPlan.WorkoutDays}
                                    currentExercise={currentSlide}
                                />
                            </div>
                        </div>

                        <div className="content-main__modal col-4" style={{ padding: '0px' }}>
                            <WorkoutModal
                                workoutAllDays={workoutPlan.WorkoutDays}
                                currentSlide={currentSlide}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;