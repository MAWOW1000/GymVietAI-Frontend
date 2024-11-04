import { useState } from "react";
import "./ExercisePage.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import { useNavigate } from "react-router-dom";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
const ExercisePage = () => {
    const navigate = useNavigate();
    const [group, setGroup] = useState('')
    const handleGroup = (e) => {
        console.log(e);
    }
    return (
        <div className="exercisePage">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-9 exercisePage__main">
                        <ExerciseItem />
                        {/* <div className="col-6 ">
                            <ModelFront />
                        </div>
                        <div className="col-6">
                            <ModelBack />
                        </div> */}
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-3 optionExerciseDiv">
                        <Option />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExercisePage;
