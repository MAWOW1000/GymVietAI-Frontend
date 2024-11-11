import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'

import './ListExercise.scss'
import { setExercise, setGender } from '../../../../../redux/slices/exerciseSlice'

const ListExercise = ({ exercises, selectedMuscle, selectedDifficulty, selectedEquipment, page, totalPage, setPage, limit }) => {
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
    let overallIndex = (page - 1) * limit;
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
    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }
    return (
        <>
            <table className="table listExerciseTable">
                <thead style={{ padding: "0px" }} className='listExerciseTable__heading'>
                    <tr>
                        <td>No</td>
                        <td>Exercise</td>
                        <td>Video</td>
                        <td>Group Muscle</td>
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
                                        <td colspan='6'>{Object.keys(groupExercise)[0]}</td>
                                    </tr>
                                    {groupExercise[Object.keys(groupExercise)[0]].map((exercise, index) => {
                                        overallIndex++;
                                        return (
                                            <tr key={`tr ${index}`} className='listExerciseTable__body--content'>
                                                <td>{overallIndex}</td>
                                                <td className='name' onClick={(event) => handleClick(event, exercise)}>{exercise.name}</td>
                                                <td>
                                                    <span className='male' id='male' onClick={(event) => handleClick(event, exercise)}>Male</span>
                                                    <span className='female' id='female' onClick={(event) => handleClick(event, exercise)}>Female</span>
                                                </td>
                                                <td>
                                                    <span className={`${exercise['GroupMuscle.name']}`}>{exercise['GroupMuscle.name']}</span>
                                                </td>
                                                <td>
                                                    <span className='optionIcon' dangerouslySetInnerHTML={{ __html: exercise['Equipment.icon'] }} />
                                                    <span className='optionName'>{exercise['Equipment.name']}</span>
                                                </td>
                                                <td>
                                                    <span className={`${exercise['Difficulty.name']}`}>{exercise['Difficulty.name']}</span>
                                                </td>
                                            </tr>)
                                    })}
                                </>
                            ))}
                        </>
                        :
                        <></>
                    }
                </tbody>
            </table>
            {selectedMuscle || selectedEquipment || selectedDifficulty ?
                <div className='listExerciseTable__pagination'>
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPage}
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </div>
                :
                <></>
            }
        </>

    )
}

export default ListExercise