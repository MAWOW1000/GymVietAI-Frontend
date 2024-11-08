import './ListExercise.scss'
const ListExercise = ({ exercises, setInforExercise, setGender }) => {
    const handleClick = (event,exercise) => {
        if(event?.target?.id === 'female' ){
            setGender(true)
        }
        setInforExercise(exercise)
    }
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
                        <td>{index+1}</td>
                        <td className='name' onClick={(event) => handleClick(event, exercise)}>{exercise.name}</td>
                        <td>
                            <span className='male' id='male' onClick={(event) => handleClick(event,exercise)}>Male</span>
                            <span className='female' id='female' onClick={(event) => handleClick(event,exercise)}>Female</span>
                        </td>
                        <td>{exercise['Equipment.name']}</td>
                        <td>
                            <span className={`${exercise['Difficulty.name']}`}>{exercise['Difficulty.name']}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListExercise