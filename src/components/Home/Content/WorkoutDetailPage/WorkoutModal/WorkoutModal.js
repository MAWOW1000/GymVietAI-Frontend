import { useState } from "react";
import './WorkoutModal.scss';
import ModelFront from "./Modal/ModelFront";
import ModelBack from "./Modal/ModelBack";
import ModelFrontFemale from "./Modal/ModelFrontFemale";
import ModelBackFemale from "./Modal/ModelBackFemale";

function WorkoutModal({ selectedMuscle }) {
    const [gender, setGender] = useState(true); // true for male, false for female

    return (
        <div className="exercisePage__model">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '20px'
            }}>
                <div>
                    <input
                        type="radio"
                        id="male"
                        checked={gender}
                        onChange={() => setGender(true)}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="female"
                        checked={!gender}
                        onChange={() => setGender(false)}
                    />
                    <label htmlFor="female">Female</label>
                </div>
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
        </div>
    );
}

export default WorkoutModal; 