import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

import './TableExercise.scss'

function TableExercise(props) {
    const { setShow } = props
    const handlePageClick = (selected) => {
        // setPage(+selected.selected + 1)
    }
    const handleEdit = () => {
        setShow(true)
    }
    return (
        <div className="tableExercise">
            <table className="table table-borderless table-striped table-hover">
                <thead className='theadExercise'>
                    <tr>
                        <th><input type='checkbox' /></th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Step</th>
                        <th>Group</th>
                        <th>Equipment</th>
                        <th>Difficulty</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>1</td>
                        <td>Partner plank band row</td>
                        <td>The partner plank band row is an abdominal exercise where two partners perform single-arm planks while pulling on the opposite ends of an exercise band. This technique can be done for time or reps in any ab-focused workout.</td>
                        <td>Strength</td>
                        <td>Bands</td>
                        <td>Intermediate</td>
                        <td>
                            <i className="tableExerciseIcon" onClick={handleEdit}>
                                <FaPen />
                            </i>
                            <i className="tableExerciseIcon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FaTrash />
                            </i>

                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content modalDelete">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Warning</h5>
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Do you want to delete this exercise ?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btnCancel" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btnDelete">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody >
            </table >
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={5}
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
            // forcePage={props.page - 1}
            />
        </div>
    );
}

export default TableExercise;