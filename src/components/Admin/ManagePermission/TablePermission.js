import { FaPen, FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllPermissions, deletePermission } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function TablePermission({ searchTerm, onEditPermission, setShow, shouldRefetch }) {
    const [permissions, setPermissions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPermissions();
    }, [searchTerm, shouldRefetch]);

    const fetchPermissions = async () => {
        try {
            const response = await getAllPermissions();
            if (response && response.EC === 0) {
                let filteredPermissions = response.DT;
                if (searchTerm) {
                    filteredPermissions = filteredPermissions.filter(permission => 
                        permission.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        permission.description?.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                setPermissions(filteredPermissions);
            }
        } catch (error) {
            toast.error('Failed to fetch permissions');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await deletePermission(id);
            if (response && response.EC === 0) {
                toast.success('Permission deleted successfully');
                fetchPermissions();
            }
        } catch (error) {
            toast.error('Failed to delete permission');
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="tablePermissions">
            {permissions.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>URL</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {permissions.map((permission, index) => (
                            <tr key={permission.id}>
                                <td>{index + 1}</td>
                                <td>{permission.url}</td>
                                <td>{permission.description}</td>
                                <td>
                                    <i className="icon" onClick={() => onEditPermission(permission)}>
                                        <FaPen />
                                    </i>
                                    <i className="icon" onClick={() => handleDelete(permission.id)}>
                                        <FaTrash />
                                    </i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="no-data">No permissions found</div>
            )}
        </div>
    );
}

export default TablePermission;
