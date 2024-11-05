import './ListExercise.scss'
const ListExercise = ({ exercises }) => {
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
                <tr className='listExerciseTable__body--header'>
                    <td colspan='5'>Muscles</td>
                </tr>
                {exercises.map((exercise, index) => (
                    <tr key={`tr ${index}`} className='listExerciseTable__body--content'>
                        <td>{index}</td>
                        <td>{exercise.Exercise}</td>
                        <td>
                            <span className='male'>Male</span>
                            <span>Female</span>
                        </td>
                        <td>{exercise.Equipment}</td>
                        <td>{exercise.Difficulty}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListExercise