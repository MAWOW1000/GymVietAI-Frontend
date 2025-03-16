import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getAllExercises, deleteExercise, searchExercise } from '../../../util/exerciseAxios/exerciseApi';
import './TableExercise.scss';

function TableExercise(props) {
    const { setShow, onEditExercise, shouldRefetch, searchTerm } = props;
    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchExercises = async () => {
        try {
            setIsLoading(true);
            let response;

            if (searchTerm) {
                response = await searchExercise(searchTerm, 10, currentPage);
            } else {
                response = await getAllExercises(currentPage, 10);
            }

            if (response && response.EC === 0) {
                setExercises(response.DT.exercises || response.DT.exercise || []);
                setTotalPages(response.DT['Total page']);
            } else {
                toast.error(response.EM || 'Failed to fetch exercises');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to fetch exercises');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setCurrentPage(1); // Reset về trang 1 khi search term thay đổi
    }, [searchTerm]);

    useEffect(() => {
        fetchExercises();
    }, [currentPage, shouldRefetch, searchTerm]);

    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected + 1);
    };

    const handleEdit = (exercise) => {
        console.log("Selected exercise for edit:", exercise); // Add logging
        if (onEditExercise) {
            onEditExercise(exercise);
        }
        if (setShow) {
            setShow(true);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteExercise(id);
            if (response && response.EC === 0) {
                toast.success('Exercise deleted successfully');
                fetchExercises(); // Refresh the list after deletion
            } else {
                toast.error(response.EM || 'Failed to delete exercise');
            }
        } catch (error) {
            console.error('Error deleting exercise:', error);
            toast.error('Failed to delete exercise');
        }
    };

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    return (
        <div className="tableExercise">
            <table className="table table-borderless table-striped table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Group Muscle</th>
                        <th>Equipment</th>
                        <th>Difficulty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, index) => (
                        <tr key={exercise.id}>
                            <td>{(currentPage - 1) * 10 + index + 1}</td>
                            <td>{exercise.name}</td>
                            <td>{exercise['GroupMuscle.name']}</td>
                            <td>{exercise['Equipment.name']}</td>
                            <td>{exercise['Difficulty.name']}</td>
                            <td>
                                <i className="tableExerciseIcon" onClick={() => handleEdit(exercise)}>
                                    <FaPen />
                                </i>
                                <i className="tableExerciseIcon" data-bs-toggle="modal" data-bs-target={`#deleteModal${exercise.id}`}>
                                    <FaTrash />
                                </i>

                                <div className="modal fade" id={`deleteModal${exercise.id}`} tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content modalDelete">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Warning</h5>
                                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Do you want to delete this exercise?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnCancel" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btnDelete"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => handleDelete(exercise.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="<"
                nextLabel=">"
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
            />
        </div>
    );
}

export default TableExercise;