import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

import './TableUser.scss'

function TableUser(props) {
    const { searchTerm, onEditUser, setShow, shouldRefetch } = props; // Add shouldRefetch to destructured props
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [currentPage, searchTerm, shouldRefetch]); // Add shouldRefetch to dependencies

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers(currentPage, 10);
            if (response && response.EC === 0) {
                let filteredUsers = response.DT.users;
                if (searchTerm) {
                    filteredUsers = filteredUsers.filter(user => 
                        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                setUsers(filteredUsers);
                setTotalPages(response.DT.totalPages);
            } else {
                toast.error(response.EM || 'Failed to fetch users');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            toast.error('Failed to fetch users');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected + 1);
    };

    const handleEdit = (user) => {
        if (onEditUser) onEditUser(user);
        // setShow is now properly defined from props
        if (setShow) setShow(true);
    };

    const handleDelete = async (userId) => {
        try {
            const response = await deleteUser(userId);
            if (response && response.EC === 0) {
                toast.success(response.EM);
                fetchUsers();
            } else {
                toast.error(response.EM || 'Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user');
        }
    };

    const getRoleBadgeClass = (role) => {
        switch(role?.toLowerCase()) {
            case 'admin':
                return 'badge bg-danger';
            case 'userpremium':
            case 'user premium':
                return 'badge bg-success';
            default:
                return 'badge bg-secondary';
        }
    }

    const formatRoleName = (role) => {
        switch(role?.toLowerCase()) {
            case 'admin':
                return 'Admin';
            case 'userpremium':
            case 'user premium':
                return 'User Premium';
            default:
                return 'User Free';
        }
    }

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    return (
        <div className="tableUsers">
            {users.length > 0 ? (
                <>
                    <table className="px-4 table table-borderless table-striped table-hover">
                        <thead className='theadUser'>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Exercise Count</th>
                                <th scope="col">Meal Plan Count</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{(currentPage - 1) * 10 + index + 1}</td>
                                    <td>{`${user.firstName} ${user.lastName}`}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={getRoleBadgeClass(user.role)}>
                                            {formatRoleName(user.role)}
                                        </span>
                                    </td>
                                    <td>{user.exerciseCount}</td>
                                    <td>{user.mealPlanCount}</td>
                                    <td>
                                        <i className="tableUserIcon" onClick={() => handleEdit(user)}>
                                            <FaPen />
                                        </i>
                                        <i 
                                            className="tableUserIcon" 
                                            data-bs-toggle="modal" 
                                            data-bs-target={`#deleteModal${user.id}`}
                                        >
                                            <FaTrash />
                                        </i>

                                        <div className="modal fade" id={`deleteModal${user.id}`} tabIndex="-1" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content modalDelete">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Warning</h5>
                                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Do you want to delete this user?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button 
                                                            type="button" 
                                                            className="btn btnCancel" 
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button 
                                                            type="button" 
                                                            className="btn btnDelete"
                                                            data-bs-dismiss="modal"
                                                            onClick={() => handleDelete(user.id)}
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
                </>
            ) : (
                <div className="text-center p-4 no-data-message">
                    <p>No users found</p>
                    {searchTerm && (
                        <small className="text-muted">
                            Try adjusting your search criteria
                        </small>
                    )}
                </div>
            )}
        </div>
    );
}

export default TableUser;