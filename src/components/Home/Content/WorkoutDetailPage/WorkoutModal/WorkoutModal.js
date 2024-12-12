import { useState } from "react";
import './WorkoutModal.scss';
import ModelFront from "./Modal/ModelFront";
import ModelBack from "./Modal/ModelBack";
import ModelFrontFemale from "./Modal/ModelFrontFemale";
import ModelBackFemale from "./Modal/ModelBackFemale";
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from "../../../../../redux/slices/exerciseSlice";

function WorkoutModal({ workoutAllDays, currentSlide }) {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.system.language);;
    const gender = useSelector((state) => state.exercise.gender);
    let currentWorkout = workoutAllDays[currentSlide];
    console.log('check current workout >>> ', currentWorkout);
    let groupMuscle = currentWorkout.WorkoutExercises.map((exercise) => exercise.Exercise.GroupMuscle.name.toLowerCase());
    console.log('check group muscle >>> ', groupMuscle);
    return (
        <div className="exercisePage__model">
            <div className="optionExerciseHeader">
                <label htmlFor='switch' className='optionExercise__gender'>
                    <input id="switch" type="checkbox" hidden value={gender} onChange={() => { dispatch(setGender(!gender)) }} />
                    <label htmlFor="switch" className="switch" />
                    <label htmlFor="switch" className="female">{language == "VI" ? "Nữ" : "Female"}</label>
                    <label htmlFor="switch" className="male">{language == "VI" ? "Nam" : "Male"}</label>
                </label>
            </div>

            <div className="model-container">
                {gender ? (
                    <>
                        <ModelFrontFemale groupMuscle={groupMuscle} />
                        <ModelBackFemale groupMuscle={groupMuscle} />
                    </>
                ) : (
                    <>
                        <ModelFront groupMuscle={groupMuscle} />
                        <ModelBack groupMuscle={groupMuscle} />
                    </>
                )}

            </div>
            <div className="button-container">
                <button onClick={() => {/* Add your button action here */ }}>
                    <svg className="h-1.5 w-1.5 fill-mw-red" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                    {language === "VI" ? "Nhóm Cơ" : "Target Muscle"}
                </button>
            </div>
        </div>
    );
}

export default WorkoutModal;