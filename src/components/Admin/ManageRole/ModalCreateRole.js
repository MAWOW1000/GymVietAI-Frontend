import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createRole, updateRole } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function ModalCreateRole(props) {
    const { show, setShow, selectedRole, onSuccess } = props;

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        permissions: []
    });

    useEffect(() => {
        if (selectedRole) {
            setFormData({
                ...selectedRole,
                permissions: selectedRole.Permissions?.map(p => p.id) || []
            });
        } else {
            setFormData({
                name: '',
                description: '',
                permissions: []
            });
        }
    }, [selectedRole]);

    const handleClose = () => {
        setShow(false);
        if (!selectedRole) {
            setFormData({
                name: '',
                description: '',
                permissions: []
            });
        }
    };

    const handleSubmit = async () => {
        try {
            const response = selectedRole 
                ? await updateRole({ ...formData, id: selectedRole.id })
                : await createRole(formData);

            if (response && response.EC === 0) {
                toast.success(selectedRole ? 'Role updated successfully' : 'Role created successfully');
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
        <Modal className='modalCreateRole' show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>{selectedRole ? 'Edit Role' : 'Create Role'}</Modal.Title>
            </Modal.Header>

            <div className='formCreateRole container'>
                <div className="form-group mb-3">
                    <label htmlFor="name">Role Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </div>
            </div>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {selectedRole ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateRole;
