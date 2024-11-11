import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ExercisePage.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import ModelBackFemale from "./Modal/ModelBackFemale";
import ModelFrontFemale from "./Modal/ModelFrontFemale";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
import { getExerciseByOptionsPagination } from "../../../../util/exerciseApi"

const ExercisePage = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [gender, setGender] = useState(true); //false is Man, true is Woman =))
    const [listExercise, setListExercise] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage ]= useState(0)
    useEffect(() => {
        async function callApi() {
            try {
                const result = await getExerciseByOptionsPagination(selectedMuscle, null, selectedEquipment, 3, page)
                if (result.EC === 0) {
                    setListExercise(result.DT.exercise)
                    setTotalPage(result.DT["Total page"])
                }
                else {
                    console.log('>> fail', result.EM)
                }
            } catch (err) {
                console.log('errr >> ', err);
            }
        }
        callApi();
    }, [selectedMuscle, selectedEquipment, page])
    return (
        <div className="exercisePage">
            <div className="container">
                <div className="row gx-5" style={{ margin: 0 }}>
                    <div className="col-8 exercisePage__main">
                        {
                            selectedMuscle ?
                                <ExerciseItem
                                    totalPage={totalPage} page={page}
                                    setPage={setPage} gender={gender}
                                    setGender={setGender} listExercise={listExercise}
                                />
                                :
                                <div className="row exercisePage__model">
                                    {
                                        gender ?
                                            <>
                                                <div className="col-6 ">
                                                    <ModelFrontFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                </div>
                                                <div className="col-6">
                                                    <ModelBackFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="col-6 ">
                                                    <ModelFront selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                </div>
                                                <div className="col-6">
                                                    <ModelBack selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                </div>
                                            </>
                                    }

                                </div>
                        }
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-4 optionExerciseDiv">
                        <Option
                            gender={gender}
                            setGender={setGender}
                            selectedMuscle={selectedMuscle}
                            setSelectedMuscle={setSelectedMuscle}
                            selectedEquipment={selectedEquipment}
                            setSelectedEquipment={setSelectedEquipment}
                            setPage={setPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExercisePage;
