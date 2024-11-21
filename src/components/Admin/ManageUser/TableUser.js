import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

import './TableUser.scss'

function TableUser() {
    const handlePageClick = (selected) => {
        // setPage(+selected.selected + 1)
    }
    return (
        <div className="tableUsers">
            <table className="px-4 table table-borderless table-striped table-hover">
                <thead className='theadUser'>
                    <tr>
                        <th scope="col"><input type='checkbox' /></th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
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
                        <td>dev@gmail.com</td>
                        <td>Admin</td>
                        <td>Dec 12,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>2</td>
                        <td>John Nguyen</td>
                        <td>johnnguyenajah@gmail.com</td>
                        <td>User</td>
                        <td>Sep 9,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>1</td>
                        <td>Dev Pham</td>
                        <td>dev@gmail.com</td>
                        <td>Admin</td>
                        <td>Dec 12,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>2</td>
                        <td>John Nguyen</td>
                        <td>johnnguyenajah@gmail.com</td>
                        <td>User</td>
                        <td>Sep 9,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>

                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>1</td>
                        <td>Dev Pham</td>
                        <td>dev@gmail.com</td>
                        <td>Admin</td>
                        <td>Dec 12,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>2</td>
                        <td>John Nguyen</td>
                        <td>johnnguyenajah@gmail.com</td>
                        <td>User</td>
                        <td>Sep 9,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>1</td>
                        <td>Dev Pham</td>
                        <td>dev@gmail.com</td>
                        <td>Admin</td>
                        <td>Dec 12,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>2</td>
                        <td>John Nguyen</td>
                        <td>johnnguyenajah@gmail.com</td>
                        <td>User</td>
                        <td>Sep 9,2024</td>
                        <td>
                            <i className="tableUserIcon">
                                <FaPen />
                            </i>
                            <i className="tableUserIcon">
                                <FaTrash />
                            </i>
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