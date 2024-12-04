import { useEffect } from "react";
import './WorkoutModal.scss';
import ModelFront from "./ModelFront/ModelFront";
import ModelBack from "./ModelBack/ModelBack";

function WorkoutModal({ selectedMuscle }) {
    useEffect(() => {
        const muscleElements = document.querySelectorAll('.body-map__muscle');

        muscleElements.forEach(element => {
            const muscleId = element?.dataset?.muscle ?? element.id;

            if (selectedMuscle === muscleId) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }, [selectedMuscle]);

    return (
        <div className="exercisePage__model">
            <div className="model-container">
                <ModelFront />
                <ModelBack />
            </div>
        </div>
    );
}

export default WorkoutModal; 