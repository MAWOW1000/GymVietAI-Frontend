import './ModalCreateExercise.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateExercise(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('User')
    const [gender, setGender] = useState('Male')
    const { show, setShow } = props


    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setRole('User')
        setGender('Male')
    }

    const handleSubmit = () => {
        console.log('logg>>>:   ', email, password, role, gender);
        handleClose();
    }
    return (
        <Modal className='modalCreateUser' size='xl' show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>Create User</Modal.Title>
            </Modal.Header>

            <div className='formCreateUser container' data-bs-theme="dark">
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label htmlFor="inputEmail4">Title</label>
                        <input type="email" className="form-control mt-1" id="inputEmail4" placeholder="Title"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="inputState">Type</label>
                        <select id="inputState" className="form-control mt-1" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value='User' selected>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label htmlFor="inputState">Role</label>
                        <select id="inputState" className="form-control mt-1" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value='User' selected>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                    </div>

                    <fieldset className="form-group col-6 mt-1">
                        <div className="formRole row m-t-6">
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                            <div className="col-sm-10">
                                <div className="form-check mb-2 mt-2">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='Male'
                                        checked
                                        onClick={() => setGender('Male')}
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="Female"
                                        onClick={() => setGender('Female')}
                                    />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Female
                                    </label>
                                </div>
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
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateExercise;


