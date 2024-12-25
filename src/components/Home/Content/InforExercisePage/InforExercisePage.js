import "./InforExercisePage.scss";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const InforExercisePage = () => {
    const navigate = useNavigate();
    let inforExercise = useSelector((state) => state.exercise.listExercise)
    let gender = useSelector((state) => state.exercise.gender)
    const { language } = useSelector((state) => state.system);

    return (
        <div className="exercisePage">
            <div className="container">
                <button 
                    className="back-button" 
                    onClick={() => navigate(-1)}
                >
                    <IoArrowBack />
                    {language === 'VI' ? 'Quay lại' : 'Back'}
                </button>
                <div className="row">
                    <div className="col-8 exercisePage__main">
                        <ExerciseItem inforExercise={inforExercise} gender={gender} />
                    </div>
                    <div className="col-4 optionExerciseDiv">
                        <Option inforExercise={inforExercise} gender={gender} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InforExercisePage;
