import './Option.scss'
import ModelBack from '../Modal/ModelBack'
import ModelFront from '../Modal/ModelFront'
import ModelBackFemale from '../Modal/ModelBackFemale'
import ModelFrontFemale from '../Modal/ModelFrontFemale'
import { useDispatch, useSelector } from 'react-redux'
import { setGender } from '../../../../../redux/slices/exerciseSlice'

const Option = ({ inforExercise }) => {
    const dispatch = useDispatch()
    const gender = useSelector((state) => state.exercise.gender)
    const language = useSelector((state) => state.system.language)
    const groupMuscle = inforExercise[`GroupMuscle.name`] || inforExercise.GroupMuscle.name;
    return (
        <div className="optionExercise">
            <div className="optionExerciseHeader">
                <label for='switch' className='optionExercise__gender'>
                    <input id="switch" type="checkbox" hidden checked={!gender} value={gender} onChange={() => { dispatch(setGender(!gender)) }} />
                    <label for="switch" className="switch" />
                    <label for="switch" className="female">{language == "VI" ? "Nữ" : "Female"}</label>
                    <label for="switch" className="male">{language == "VI" ? "Nam" : "Male"}</label>
                </label>
            </div>
            <div className="row exercisePage__model inforExercise">
                {gender ?
                    <>
                        <div className="col-6 ">
                            <ModelFrontFemale groupMuscle={groupMuscle} />
                        </div>
                        <div className="col-6">
                            <ModelBackFemale groupMuscle={groupMuscle} />
                        </div>
                    </>
                    :
                    <>
                        <div className="col-6 ">
                            <ModelFront groupMuscle={groupMuscle} />
                        </div>
                        <div className="col-6">
                            <ModelBack groupMuscle={groupMuscle} />
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Option;