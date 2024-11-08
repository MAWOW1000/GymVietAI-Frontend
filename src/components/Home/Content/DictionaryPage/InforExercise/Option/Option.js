import './Option.scss'
import ModelBack from '../Modal/ModelBack'
import ModelFront from '../Modal/ModelFront'

const Option = ({ inforExercise, gender }) => {

    return (
        <div className="optionExercise">
            <div className="optionExerciseHeader">
                <h3>Optional</h3>
            </div>
            <div className="row exercisePage__model">
                <div className="col-6 ">
                    <ModelFront groupMuscle={inforExercise[`GroupMuscle.name`]}/>
                </div>
                <div className="col-6">
                    <ModelBack groupMuscle={inforExercise[`GroupMuscle.name`]}/>
                </div>
            </div>
        </div>
    )
}

export default Option;