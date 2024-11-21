import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

import './TableExercise.scss'

function TableExercise() {
    const handlePageClick = (selected) => {
        // setPage(+selected.selected + 1)
    }
    return (
        <>
            <table className="table table-borderless table-striped table-hover">
                <thead className='theadExercise'>
                    <tr>
                        <th><input type='checkbox' /></th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Equipment</th>
                        <th>Level</th>
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
                            <i className="tableExerciseIcon">
                                <FaPen />
                            </i>
                            <i className="tableExerciseIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    {/* <tr>
                        <td><input type='checkbox' /></td>
                        <td>2</td>
                        <td>Banded crunch isometric hold</td>
                        <td>The banded crunch isometric hold is an exercise targeting the abdominal muscles, particularly the rectus abdominis or "six-pack" muscles. The band adds resistance and continuous tension to this popular exercise.</td>
                        <td>Strength</td>
                        <td>Bands</td>
                        <td>Intermediate</td>
                        <td>
                            <i className="tableExerciseIcon">
                                <FaPen />
                            </i>
                            <i className="tableExerciseIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr> */}
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
        </>
    );
}

export default TableExercise;