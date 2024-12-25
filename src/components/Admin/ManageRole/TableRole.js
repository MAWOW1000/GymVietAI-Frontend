import { FaPen, FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllRoles, deleteRole } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function TableRole(props) {
    const { searchTerm, onEditRole, setShow, shouldRefetch } = props;
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRoles();
    }, [searchTerm, shouldRefetch]);

    const fetchRoles = async () => {
        try {
            const response = await getAllRoles();
            if (response && response.EC === 0) {
                let filteredRoles = response.DT;
                if (searchTerm) {
                    filteredRoles = filteredRoles.filter(role => 
                        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        role.description?.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                setRoles(filteredRoles);
            }
        } catch (error) {
            console.error('Error fetching roles:', error);
            toast.error('Failed to fetch roles');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (roleId) => {
        try {
            const response = await deleteRole(roleId);
            if (response && response.EC === 0) {
                toast.success('Role deleted successfully');
                fetchRoles();
            } else {
                toast.error(response.EM || 'Failed to delete role');
            }
        } catch (error) {
            toast.error('Failed to delete role');
        }
    };

    if (isLoading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    return (
        <div className="tableRoles">
            {roles.length > 0 ? (
                <table className="px-4 table table-borderless table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Permissions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                            <tr key={role.id}>
                                <td>{index + 1}</td>
                                <td>{role.name}</td>
                                <td>{role.description}</td>
                                <td>
                                    {role.Permissions?.map(p => p.name).join(', ')}
                                </td>
                                <td>
                                    <i className="tableRoleIcon" onClick={() => onEditRole(role)}>
                                        <FaPen />
                                    </i>
                                    <i className="tableRoleIcon" onClick={() => handleDelete(role.id)}>
                                        <FaTrash />
                                    </i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center p-4 no-data-message">
                    <p>No roles found</p>
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

export default TableRole;
