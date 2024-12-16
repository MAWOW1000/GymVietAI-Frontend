
import "./InforExercisePage.scss";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";
import { useSelector } from 'react-redux'
const InforExercisePage = () => {
    let inforExercise = useSelector((state) => state.exercise.listExercise)
    let gender = useSelector((state) => state.exercise.gender)
    return (
        <div className="exercisePage">
            <div className="container">
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
