import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createExercise, updateExercise } from '../../../util/exerciseAxios/exerciseApi';
import { toast } from 'react-toastify';
import './ModalCreateExercise.scss';

function ModalCreateExercise(props) {
    const { show, setShow, selectedExercise, onSuccess } = props;

    const [formData, setFormData] = useState({
        name: '',
        name_vi: '',
        step: '',
        step_vi: '',
        video_male: '',
        video_female: '',
        description: '',
        description_vi: '',
        link_description: '',
        group_muscle_id: '',
        equipment_id: '',
        difficulty_id: ''
    });

    useEffect(() => {
        console.log("Modal received selectedExercise:", selectedExercise); // Add logging
        if (selectedExercise) {
            const formattedData = {
                id: selectedExercise.id,
                name: selectedExercise.name || '',
                name_vi: selectedExercise.name_vi || '',
                step: selectedExercise.step || '',
                step_vi: selectedExercise.step_vi || '',
                video_male: selectedExercise.video_male || '',
                video_female: selectedExercise.video_female || '',
                description: selectedExercise.description || '',
                description_vi: selectedExercise.description_vi || '',
                link_description: selectedExercise.link_description || '',
                group_muscle_id: selectedExercise['GroupMuscle.id'] || '',
                equipment_id: selectedExercise['Equipment.id'] || '',
                difficulty_id: selectedExercise['Difficulty.id'] || ''
            };
            console.log("Setting form data:", formattedData); // Add logging
            setFormData(formattedData);
        }
    }, [selectedExercise]);

    const handleClose = () => {
        setShow(false);
    };

    const handleSubmit = async () => {
        try {
            let response;
            if (selectedExercise) {
                response = await updateExercise({
                    ...formData,
                    id: selectedExercise.id
                });
            } else {
                response = await createExercise(formData);
            }

            if (response && response.EC === 0) {
                toast.success(selectedExercise ? 'Exercise updated successfully' : 'Exercise created successfully');
                handleClose();
                if (onSuccess) onSuccess();
            } else {
                toast.error(response.EM || 'Operation failed');
            }
        } catch (error) {
            console.error('Operation error:', error);
            toast.error(error.response?.data?.EM || 'Operation failed');
        }
    };

    return (
        <Modal 
            className='modalCreateExercise' 
            size='xl' 
            show={show} 
            onHide={handleClose} 
            backdrop='static'
            fullscreen="lg-down" // Responsive fullscreen trên màn hình nhỏ
        >
            <Modal.Header closeButton>
                <Modal.Title>{selectedExercise ? 'Edit Exercise' : 'Create Exercise'}</Modal.Title>
            </Modal.Header>

            <div className='formCreateExercise'>
                <div className="container-fluid">
                    {/* Thay đổi spacing cho form rows */}
                    <div className="form-row row mb-3">
                        <div className="form-group col-6">
                            <label>Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-6">
                            <label>Name (Vietnamese)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={formData.name_vi}
                                onChange={(e) => setFormData({...formData, name_vi: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-row row mb-3">
                        <div className="form-group col-12 mb-3">
                            <label>Steps</label>
                            <textarea 
                                className="form-control" 
                                value={formData.step}
                                onChange={(e) => setFormData({...formData, step: e.target.value})}
                                rows={4} // Specify number of rows
                            />
                        </div>
                        <div className="form-group col-12 mb-3">
                            <label>Steps (Vietnamese)</label>
                            <textarea 
                                className="form-control" 
                                value={formData.step_vi}
                                onChange={(e) => setFormData({...formData, step_vi: e.target.value})}
                                rows={4}
                            />
                        </div>
                    </div>

                    <div className="form-row row mb-3">
                        <div className="form-group col-6">
                            <label>Video URL (Male)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={formData.video_male}
                                onChange={(e) => setFormData({...formData, video_male: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-6">
                            <label>Video URL (Female)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={formData.video_female}
                                onChange={(e) => setFormData({...formData, video_female: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-row row mb-3">
                        <div className="form-group col-12">
                            <label>Description</label>
                            <textarea 
                                className="form-control" 
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-12">
                            <label>Description (Vietnamese)</label>
                            <textarea 
                                className="form-control" 
                                value={formData.description_vi}
                                onChange={(e) => setFormData({...formData, description_vi: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-row row mb-3">
                        <div className="form-group col-12">
                            <label>Link Description</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={formData.link_description}
                                onChange={(e) => setFormData({...formData, link_description: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-row row mb-3">
                        <div className="form-group col-4">
                            <label>Group Muscle</label>
                            <select 
                                className="form-select" 
                                value={formData.group_muscle_id}
                                onChange={(e) => setFormData({...formData, group_muscle_id: e.target.value})}
                            >
                                <option value="">Select Group Muscle</option>
                                {/* Add options from your group muscles data */}
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label>Equipment</label>
                            <select 
                                className="form-select" 
                                value={formData.equipment_id}
                                onChange={(e) => setFormData({...formData, equipment_id: e.target.value})}
                            >
                                <option value="">Select Equipment</option>
                                {/* Add options from your equipment data */}
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label>Difficulty</label>
                            <select 
                                className="form-select" 
                                value={formData.difficulty_id}
                                onChange={(e) => setFormData({...formData, difficulty_id: e.target.value})}
                            >
                                <option value="">Select Difficulty</option>
                                {/* Add options from your difficulty data */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <Modal.Footer>
                <Button variant="secondary" className='btnClose' onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" className='btnCreate' onClick={handleSubmit}>
                    {selectedExercise ? 'Update' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateExercise;


