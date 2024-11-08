
import "./InforExercise.scss";
import ModelBack from "./Modal/ModelBack";
import ModelFront from "./Modal/ModelFront";
import Option from "./Option/Option";
import ExerciseItem from "./ExerciseItem/ExerciseItem";


const InforExercise = ({ inforExercise, gender }) => {
    console.log('>> infor', inforExercise)
    return (
        <div className="exercisePage">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-9 exercisePage__main">
                        <ExerciseItem inforExercise={inforExercise} gender={gender} />
                    </div>
                    <div className="col-3 optionExerciseDiv">
                        <Option inforExercise={inforExercise} gender={gender} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InforExercise;
