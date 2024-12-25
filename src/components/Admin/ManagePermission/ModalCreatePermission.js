import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { createPermission, updatePermission } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function ModalCreatePermission({ show, setShow, selectedPermission, onSuccess }) {
    const [formData, setFormData] = useState({
        url: '',
        description: ''
    });

    useEffect(() => {
        if (selectedPermission) {
            setFormData({
                url: selectedPermission.url,
                description: selectedPermission.description || ''
            });
        } else {
            setFormData({
                url: '',
                description: ''
            });
        }
    }, [selectedPermission]);

    const handleSubmit = async () => {
        try {
            const response = selectedPermission 
                ? await updatePermission({ ...formData, id: selectedPermission.id })
                : await createPermission(formData);

            if (response && response.EC === 0) {
                toast.success(`Permission ${selectedPermission ? 'updated' : 'created'} successfully`);
                setShow(false);
                if (onSuccess) onSuccess();
            }
        } catch (error) {
            toast.error('Operation failed');
        }
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {selectedPermission ? 'Edit Permission' : 'Create Permission'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group mb-3">
                    <label>URL Path</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.url}
                        onChange={(e) => setFormData({...formData, url: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {selectedPermission ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreatePermission;
