import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ExercisePage.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import ModelBackFemale from "./Modal/ModelBackFemale";
import ModelFrontFemale from "./Modal/ModelFrontFemale";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
import { postExerciseByOptionsPagination } from "../../../../util/exerciseAxios/exerciseApi"

const ExercisePage = () => {
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [gender, setGender] = useState(true); //false is Man, true is Woman =))
    const [listExercise, setListExercise] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [showFullModel, setShowFullModel] = useState(false);
    const [activeModel, setActiveModel] = useState('front'); // 'front' or 'back'

    useEffect(() => {
        // Check for stored state when component mounts
        const storedState = localStorage.getItem('previousExerciseState');
        if (storedState) {
            const { listExercise, gender, page, totalPage, selectedMuscle, selectedEquipment } = JSON.parse(storedState);
            setListExercise(listExercise);
            setGender(gender);
            setPage(page);
            setTotalPage(totalPage);
            setSelectedMuscle(selectedMuscle);
            setSelectedEquipment(selectedEquipment);
            // Clear stored state after retrieving
            localStorage.removeItem('previousExerciseState');
        }
    }, []);

    useEffect(() => {
        async function callApi() {
            try {
                const result = await postExerciseByOptionsPagination(selectedMuscle, null, selectedEquipment, 3, page)
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
        if (selectedMuscle || selectedEquipment) {
            callApi();
        }
        // Save state to localStorage whenever it changes
        const currentState = {
            listExercise,
            gender,
            page,
            totalPage,
            selectedMuscle,
            selectedEquipment
        };
        localStorage.setItem('previousExerciseState', JSON.stringify(currentState));
    }, [selectedMuscle, selectedEquipment, gender, page]);

    // Save state when component unmounts
    useEffect(() => {
        return () => {
            const currentState = {
                listExercise,
                gender,
                page,
                totalPage,
                selectedMuscle,
                selectedEquipment
            };
            localStorage.setItem('previousExerciseState', JSON.stringify(currentState));
        };
    }, [listExercise, gender, page, totalPage, selectedMuscle, selectedEquipment]);

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
                                <div>
                                    <div className={`row exercisePage__model ${showFullModel ? 'show-full' : ''}`}>
                                        {
                                            gender ?
                                                <>
                                                    <div className="col-6">
                                                        <ModelFrontFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                    </div>
                                                    <div className="col-6">
                                                        <ModelBackFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="col-6">
                                                        <ModelFront selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                    </div>
                                                    <div className="col-6">
                                                        <ModelBack selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                    </div>
                                                </>
                                        }
                                    </div>
                                    <div className="models-preview">
                                        <div className={`model-preview ${activeModel === 'front' ? 'active' : 'inactive'}`} 
                                             onClick={() => {
                                                 if (activeModel === 'front') {
                                                     setShowFullModel(!showFullModel);
                                                 } else {
                                                     setActiveModel('front');
                                                 }
                                             }}>
                                            {gender ? 
                                                <ModelFrontFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} /> 
                                                : <ModelFront selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />}
                                        </div>
                                        <div className={`model-preview ${activeModel === 'back' ? 'active' : 'inactive'}`}
                                             onClick={() => {
                                                 if (activeModel === 'back') {
                                                     setShowFullModel(!showFullModel);
                                                 } else {
                                                     setActiveModel('back');
                                                 }
                                             }}>
                                            {gender ? 
                                                <ModelBackFemale selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />
                                                : <ModelBack selectedMuscle={selectedMuscle} setSelectedMuscle={setSelectedMuscle} />}
                                        </div>
                                    </div>
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
