import { useState, useEffect } from 'react';
import './ModalPermissionRole.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPermissionRole, updatePermissionRole, getAllPermissions, getAllRoles } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function ModalPermissionRole(props) {
    const { show, setShow, selectedPermissionRole, onSuccess } = props;
    const [permissions, setPermissions] = useState([]);
    const [roles, setRoles] = useState([]);
    const [formData, setFormData] = useState({
        permissionId: '',
        roleId: '',
        oldPermissionId: '',
        oldRoleId: ''
    });

    useEffect(() => {
        fetchPermissionsAndRoles();
    }, []);

    useEffect(() => {
        if (selectedPermissionRole) {
            setFormData({
                permissionId: selectedPermissionRole.permissionId,
                roleId: selectedPermissionRole.roleId,
                oldPermissionId: selectedPermissionRole.permissionId,
                oldRoleId: selectedPermissionRole.roleId
            });
        } else {
            setFormData({
                permissionId: '',
                roleId: '',
                oldPermissionId: '',
                oldRoleId: ''
            });
        }
    }, [selectedPermissionRole]);

    const fetchPermissionsAndRoles = async () => {
        try {
            const [permissionsResponse, rolesResponse] = await Promise.all([
                getAllPermissions(),
                getAllRoles()
            ]);
            
            if (permissionsResponse.EC === 0) {
                setPermissions(permissionsResponse.DT);
            }
            if (rolesResponse.EC === 0) {
                setRoles(rolesResponse.DT);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching permissions and roles');
        }
    };

    const handleClose = () => {
        setShow(false);
        setFormData({
            permissionId: '',
            roleId: '',
            oldPermissionId: '',
            oldRoleId: ''
        });
    };

    const handleSubmit = async () => {
        try {
            const response = selectedPermissionRole 
                ? await updatePermissionRole(formData)
                : await createPermissionRole(formData);

            if (response && response.EC === 0) {
                toast.success(selectedPermissionRole ? 'Updated successfully' : 'Created successfully');
                handleClose();
                if (onSuccess) onSuccess();
            } else {
                toast.error(response.EM || 'Operation failed');
            }
        } catch (error) {
            toast.error(error.response?.data?.EM || 'Operation failed');
        }
    };

    return (
        <Modal className='modalPermissionRole' show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>{selectedPermissionRole ? 'Edit Permission-Role' : 'Create Permission-Role'}</Modal.Title>
            </Modal.Header>

            <div className='formPermissionRole container'>
                <div className="form-group">
                    <label htmlFor="permission">Permission</label>
                    <select 
                        id="permission" 
                        className="form-control form-select" 
                        value={formData.permissionId}
                        onChange={(e) => setFormData({...formData, permissionId: e.target.value})}
                    >
                        <option value="">Select Permission</option>
                        {permissions.map(permission => (
                            <option key={permission.id} value={permission.id}>
                                {permission.url}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select 
                        id="role" 
                        className="form-control form-select" 
                        value={formData.roleId}
                        onChange={(e) => setFormData({...formData, roleId: e.target.value})}
                    >
                        <option value="">Select Role</option>
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Modal.Footer>
                <Button variant="secondary" className='btnClose' onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" className='btnCreate' onClick={handleSubmit}>
                    {selectedPermissionRole ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalPermissionRole;
