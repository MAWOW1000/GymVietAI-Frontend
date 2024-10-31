import { useState } from "react";
import "./ExercisePage.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
const Draft = () => {
    const [group, setGroup] = useState('')
    const handleGroup = (e) => {
        console.log(e);
    }
    return (
        <div className="exercisePage">
            <div className="container">
                <div className="row">
                    <div className="col-9 listExercise">
                        <ExerciseItem />
                    </div>

                    <div className="col-3 optionExerciseDiv">
                        <div className="col-12">
                            <div className="optionExerciseHeader">
                                <h3>Optional</h3>
                            </div>
                            <div className="row exercisePage__model">
                                <div className="col-6 ">
                                    <ModelFront />
                                </div>
                                <div className="col-6">
                                    <ModelBack />
                                </div>
                            </div>
                            <hr />
                            <div className="optionExerciseContent">
                                <div className="machineOption optionExerciseItem">
                                    <input type="checkbox" className="machineCheckbox" id="machineCheckbox" />
                                    <label className="machineLabel" htmlFor="machineLabel">Machine</label>
                                </div>
                                <div className="bodyWeightOption optionExerciseItem">
                                    <input type="checkbox" className="bodyWeightCheckbox" id="bodyWeightCheckbox" />
                                    <label className="bodyWeightLabel" htmlFor="bodyWeightLabel">Bodyweight</label>
                                </div>
                                <div className="yogaOption optionExerciseItem">
                                    <input type="checkbox" className="yogaCheckbox" id="yogaCheckbox" />
                                    <label className="yogaLabel" htmlFor="yogaLabel">Yoga</label>
                                </div>
                                <div className="genderOption optionExerciseItem">
                                    <input type="checkbox" className="genderCheckbox" id="genderCheckbox" />
                                    <label className="genderLabel" htmlFor="genderLabel">Male</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Draft;
