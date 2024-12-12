import { useState } from "react";
import './WorkoutModal.scss';
import ModelFront from "./Modal/ModelFront";
import ModelBack from "./Modal/ModelBack";
import ModelFrontFemale from "./Modal/ModelFrontFemale";
import ModelBackFemale from "./Modal/ModelBackFemale";
import { useSelector } from 'react-redux';

function WorkoutModal({ selectedMuscle }) {
    const language = useSelector((state) => state.system.language);;
    const [gender, setGender] = useState(true); // true for male, false for female

    return (
        <div className="exercisePage__model">
            <div className="optionExerciseHeader">
                <label htmlFor='switch' className='optionExercise__gender'>
                    <input id="switch" type="checkbox" hidden value={gender} onChange={() => { setGender(!gender) }} />
                    <label htmlFor="switch" className="switch" />
                    <label htmlFor="switch" className="female">{language == "VI" ? "Nữ" : "Female"}</label>
                    <label htmlFor="switch" className="male">{language == "VI" ? "Nam" : "Male"}</label>
                </label>
            </div>

            <div className="model-container">
                {gender ? (
                    <>
                        <ModelFront selectedMuscle={selectedMuscle} />
                        <ModelBack selectedMuscle={selectedMuscle} />
                    </>
                ) : (
                    <>
                        <ModelFrontFemale selectedMuscle={selectedMuscle} />
                        <ModelBackFemale selectedMuscle={selectedMuscle} />
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