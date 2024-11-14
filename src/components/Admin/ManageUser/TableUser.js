import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

import './TableUser.scss'

function TableUser(props) {
    const { setShow } = props
    const handlePageClick = (selected) => {
        // setPage(+selected.selected + 1)
    }
    const handleEdit = () => {
        setShow(true)
    }
    return (
        <div className="tableUsers">
            <table className="px-4 table table-borderless table-striped table-hover">
                <thead className='theadUser'>
                    <tr>
                        <th scope="col"><input type='checkbox' /></th>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Time</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>1</td>
                        <td>Dev Pham</td>
                        <td>Male</td>
                        <td>dev@gmail.com</td>
                        <td>Admin</td>
                        <td>Dec 12,2024</td>
                        <td>
                            <i className="tableUserIcon" onClick={handleEdit}>
                                <FaPen />
                            </i>
                            <i className="tableUserIcon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FaTrash />
                            </i>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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

export default TableUser;