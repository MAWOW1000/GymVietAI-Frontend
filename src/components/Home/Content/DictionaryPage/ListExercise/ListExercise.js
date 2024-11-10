import './ListExercise.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setExercise, setGender } from '../../../../../redux/slices/exerciseSlice'
const ListExercise = ({ exercises, selectedMuscle, selectedDifficulty, selectedEquipment }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = (event, exercise) => {
        if (event?.target?.id === 'male') {
            dispatch(setGender(false))
        }
        dispatch((setExercise(exercise)))
        navigate('../information')
    }
    const groupedExercises = [];

    exercises.forEach(exercise => {
        const muscleGroup = exercise[`GroupMuscle.name`];
        let foundGroup = false;

        for (let i = 0; i < groupedExercises.length; i++) {
            if (groupedExercises[i].hasOwnProperty(muscleGroup)) {
                groupedExercises[i][muscleGroup].push(exercise);
                foundGroup = true;
                break;
            }
        }

        if (!foundGroup) {
            groupedExercises.push({ [muscleGroup]: [exercise] });
        }
    });
    return (
        <table className="table listExerciseTable">
            <thead style={{ padding: "0px" }} className='listExerciseTable__heading'>
                <tr>
                    <td>No</td>
                    <td>Exercise</td>
                    <td>Video</td>
                    <td>Equipment</td>
                    <td>Difficulty</td>
                </tr>
            </thead>
            <tbody style={{ padding: "0px" }} className='listExerciseTable__body'>
                {selectedMuscle || selectedEquipment || selectedDifficulty ?
                    <>
                        {groupedExercises.map((groupExercise, index) => (
                            <>
                                <tr key={`asd ${index}`} className='listExerciseTable__body--header'>
                                    <td colspan='5'>{Object.keys(groupExercise)[0]}</td>
                                </tr>
                                {groupExercise[Object.keys(groupExercise)[0]].map((exercise, index) => (
                                    <tr key={`tr ${index}`} className='listExerciseTable__body--content'>
                                        <td>{index + 1}</td>
                                        <td className='name' onClick={(event) => handleClick(event, exercise)}>{exercise.name}</td>
                                        <td>
                                            <span className='male' id='male' onClick={(event) => handleClick(event, exercise)}>Male</span>
                                            <span className='female' id='female' onClick={(event) => handleClick(event, exercise)}>Female</span>
                                        </td>
                                        <td>
                                            <span className='optionIcon' dangerouslySetInnerHTML={{ __html: exercise['Equipment.icon'] }} />
                                            <span className='optionName'>{exercise['Equipment.name']}</span>
                                        </td>
                                        <td>
                                            <span className={`${exercise['Difficulty.name']}`}>{exercise['Difficulty.name']}</span>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </>
                    :
                    <></>
                }
            </tbody>
        </table>
    )
}

export default ListExercise