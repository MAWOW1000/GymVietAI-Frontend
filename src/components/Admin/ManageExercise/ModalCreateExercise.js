import './ModalCreateExercise.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateExercise(props) {

    const { show, setShow } = props


    const handleClose = () => {
        setShow(false)

    }

    const handleSubmit = () => {
        handleClose();
    }
    return (
        <Modal className='modalCreateUser' size='xl' show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>Create User</Modal.Title>
            </Modal.Header>

            <div className='formCreateUser container' data-bs-theme="dark">
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label htmlFor="inputEmail4">Name</label>
                        <input type="email" className="form-control mt-1" id="inputEmail4" placeholder="Title" />
                    </div>
                    <div className="form-group col-6">
                        <label >Steps</label>
                        <input type="text" className="form-control mt-1" placeholder="Title" />
                    </div>

                </div>

                <div className="form-row row">
                    <div className="form-group col-6">
                        <label >Video Male</label>
                        <input type="text" className="form-control mt-1" placeholder="Title" />
                    </div>
                    <div className="form-group col-6">
                        <label >Video Female</label>
                        <input type="text" className="form-control mt-1" placeholder="Title" />
                    </div>

                </div>
                <div className="form-row row">
                    <div className="form-group col-6">
                        <label >Description</label>
                        <input type="text" className="form-control mt-1" placeholder="Title" />
                    </div>

                    <div className="form-group col-6">
                        <label >Link Description</label>
                        <input type="text" className="form-control mt-1" placeholder="Title" />
                    </div>
                </div>

                <div className="form-row row">
                    <div className="form-group col-4">
                        <label htmlFor="inputState">Equipment</label>
                        <select id="inputState" className="form-control mt-1" >
                            <option value='User' selected>Barbell</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="inputState">Difficulty</label>
                        <select id="inputState" className="form-control mt-1" >
                            <option value='User' selected>Beginner</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="inputState">Group</label>
                        <select id="inputState" className="form-control mt-1">
                            <option value='User' selected>Chest</option>
                        </select>
                    </div>
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


