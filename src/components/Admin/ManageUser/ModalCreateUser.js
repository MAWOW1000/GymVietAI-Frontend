import { useState, useEffect } from 'react';
import './ModalCreateUser.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUser, updateUser } from '../../../util/authenAxios/authenApi';
import { toast } from 'react-toastify';

function ModalCreateUser(props) {
    const { show, setShow, selectedUser, onSuccess } = props;

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        gender: 'male',
        dateOfBirth: '',
        roleId: 2, // Default to free user
        picture: '' // Optional profile picture
    });

    useEffect(() => {
        if (selectedUser) {
            setFormData({
                ...selectedUser,
                password: '', // Clear password when editing
                roleId: getRoleId(selectedUser.role),
                gender: selectedUser.gender.toLowerCase()
            });
        } else {
            // Reset form for new user
            setFormData({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                gender: 'male',
                dateOfBirth: '',
                roleId: 2 // Default to free user
            });
        }
    }, [selectedUser]);

    const getRoleId = (roleName) => {
        switch(roleName?.toLowerCase()) {
            case 'admin':
                return 1;
            case 'premium':
                return 3;
            default:
                return 2; // free user
        }
    }

    const handleClose = () => {
        setShow(false);
        if (!selectedUser) {
            setFormData({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                gender: 'male',
                dateOfBirth: '',
                roleId: 2
            });
        }
    };

    const handleSubmit = async () => {
        try {
            const response = selectedUser 
                ? await updateUser({ ...formData, id: selectedUser.id })
                : await createUser(formData);

            if (response && response.EC === 0) {
                toast.success(selectedUser ? 'User updated successfully' : 'User created successfully');
                handleClose();
                if (onSuccess) onSuccess(); // Call onSuccess to trigger refresh
            } else {
                toast.error(response.EM || 'Operation failed');
            }
        } catch (error) {
            toast.error(error.response?.data?.EM || 'Operation failed');
        }
    };

    return (
        <Modal className='modalCreateUser' size='xl' show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>{selectedUser ? 'Edit User' : 'Create User'}</Modal.Title>
            </Modal.Header>

            <div className='formCreateUser container' data-bs-theme="dark">
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label htmlFor="firstName">First name</label>
                        <input 
                            type="text" 
                            className="form-control mt-1" 
                            id="firstName" 
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="lastName">Last name</label>
                        <input 
                            type="text" 
                            className="form-control mt-1" 
                            id="lastName" 
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className="form-control mt-1" 
                            id="email" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            disabled={selectedUser} // Email cannot be changed for existing users
                        />
                    </div>
                    {!selectedUser && (
                        <div className="form-group col-6">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control mt-1" 
                                id="password" 
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                    )}
                </div>
                <div className="form-row row mt-1">
                    <div className="form-group col-4">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input 
                            className='form-date' 
                            type='date'
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                        />
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor="role">Role</label>
                        <select 
                            id="role" 
                            className="form-control mt-1 form-select formRole" 
                            value={formData.roleId}
                            onChange={(e) => setFormData({...formData, roleId: parseInt(e.target.value)})}
                        >
                            <option value={2}>User Free</option>
                            <option value={3}>User Premium</option>
                            <option value={1}>Admin</option>
                        </select>
                    </div>

                    <fieldset className="form-group col-4">
                        <div className="formGender">
                            <legend className="col-form-label">Gender</legend>

                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="gender" 
                                    id="genderMale" 
                                    value='male'
                                    checked={formData.gender === 'male'}
                                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                />
                                <label className="form-check-label" htmlFor="genderMale">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="gender" 
                                    id="genderFemale"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                />
                                <label className="form-check-label" htmlFor="genderFemale">
                                    Female
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>

            <Modal.Footer>
                <Button variant="secondary" className='btnClose' onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" className='btnCreate' onClick={handleSubmit}>
                    {selectedUser ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateUser;
