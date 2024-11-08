import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ExercisePage.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
import { getExerciseByOptions } from "../../../../util/exerciseApi"

const ExercisePage = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [gender, setGender] = useState(false); //false is Man, true is Woman =))
    const [listExercise, setListExercise] = useState([]);

    useEffect(() => {
        async function callApi() {
            try {
                const result = await getExerciseByOptions(selectedMuscle, null, selectedEquipment)
                if (result.EC === 0) {
                    setListExercise(result.DT)
                    console.log('>>success ', selectedMuscle, result.DT, selectedEquipment)
                }
                else {
                    console.log('>> fail', result.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [selectedMuscle, selectedEquipment])
    return (
        <div className="exercisePage">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-9 exercisePage__main">
                        {
                            selectedMuscle ? <ExerciseItem listExercise={listExercise} />
                                :
                                <div className="row exercisePage__model">
                                    <div className="col-6 ">
                                        <ModelFront selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                    </div>
                                    <div className="col-6">
                                        <ModelBack selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                    </div>
                                </div>
                        }
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-3 optionExerciseDiv">
                        <Option
                            selectedMuscle={selectedMuscle}
                            setSelectedMuscle={setSelectedMuscle}
                            selectedEquipment={selectedEquipment}
                            setSelectedEquipment={setSelectedEquipment}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExercisePage;
