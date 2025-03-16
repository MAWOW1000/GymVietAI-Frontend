import { FaPen, FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { getAllPermissionRoles, deletePermissionRole } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';
import './TablePermissionRole.scss';

function TablePermissionRole(props) {
    const { searchTerm, onEditPermissionRole, setShow, shouldRefetch } = props;
    const [permissionRoles, setPermissionRoles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPermissionRoles();
    }, [currentPage, searchTerm, shouldRefetch]);

    const fetchPermissionRoles = async () => {
        try {
            const response = await getAllPermissionRoles(currentPage, 10);
            if (response && response.EC === 0) {
                let filteredPermissionRoles = response.DT.permissionRoles;
                if (searchTerm) {
                    filteredPermissionRoles = filteredPermissionRoles.filter(pr => 
                        pr.Permission.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        pr.Role.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                setPermissionRoles(filteredPermissionRoles);
                setTotalPages(response.DT.totalPages);
            } else {
                toast.error(response.EM || 'Failed to fetch permission-roles');
            }
        } catch (error) {
            console.error('Error fetching permission-roles:', error);
            toast.error('Failed to fetch permission-roles');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected + 1);
    };

    const handleDelete = async (permissionId, roleId) => {
        try {
            const response = await deletePermissionRole(permissionId, roleId);
            if (response && response.EC === 0) {
                toast.success(response.EM);
                fetchPermissionRoles();
            } else {
                toast.error(response.EM || 'Failed to delete permission-role');
            }
        } catch (error) {
            console.error('Error deleting permission-role:', error);
            toast.error('Failed to delete permission-role');
        }
    };

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    return (
        <div className="tablePermissionRoles">
            <table className="px-4 table table-borderless table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Permission URL</th>
                        <th scope="col">Permission Description</th>
                        <th scope="col">Role Name</th>
                        <th scope="col">Role Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {permissionRoles.map((pr, index) => (
                        <tr key={`${pr.permissionId}-${pr.roleId}`}>
                            <td>{(currentPage - 1) * 10 + index + 1}</td>
                            <td>{pr.Permission.url}</td>
                            <td>{pr.Permission.description}</td>
                            <td>{pr.Role.name}</td>
                            <td>{pr.Role.description}</td>
                            <td>
                                <i className="tableIcon" onClick={() => onEditPermissionRole(pr)}>
                                    <FaPen />
                                </i>
                                <i 
                                    className="tableIcon" 
                                    data-bs-toggle="modal" 
                                    data-bs-target={`#deleteModal${pr.permissionId}-${pr.roleId}`}
                                >
                                    <FaTrash />
                                </i>

                                <div className="modal fade" id={`deleteModal${pr.permissionId}-${pr.roleId}`} tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content modalDelete">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Warning</h5>
                                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Do you want to delete this permission-role relationship?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnCancel" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btnDelete"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => handleDelete(pr.permissionId, pr.roleId)}
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

export default TablePermissionRole;
