import './ManageExercise.scss'
import { FiSearch } from "react-icons/fi";
import TableExercise from './TableExercise';
import { useState } from 'react';
import ModalCreateExercise from './ModalCreateExercise';

function ManageExercise() {
    const [show, setShow] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCreate = () => {
        setSelectedExercise(null);
        setShow(true);
    };

    const handleEditExercise = (exercise) => {
        console.log("Receiving exercise for edit:", exercise); // Add logging
        setSelectedExercise(exercise);
        setShow(true);
    };

    const handleSuccess = () => {
        setShouldRefetch(prev => !prev);
    };

    return (
        <div className="manageExercise">
            <div className="manageExerciseHeader">
                <span className="manageExercise__header__title">Manage Exercise</span>
                <div className='manageExercise__header__search__div'>
                    <label htmlFor='manageExercise__header__search' className='manageExercise__header__search__icon'>
                        <FiSearch />
                    </label>
                    <input 
                        id='manageExercise__header__search' 
                        className='manageExercise__header__search' 
                        type="search" 
                        placeholder="Search exercise name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="manageExercise__header__button" onClick={handleCreate}>
                    Create Exercise
                </button>
            </div>

            <div className="manageExerciseContent">
                <TableExercise 
                    setShow={setShow}
                    onEditExercise={handleEditExercise}
                    shouldRefetch={shouldRefetch}
                    searchTerm={searchTerm}
                />
            </div>
            <ModalCreateExercise 
                show={show} 
                setShow={setShow}
                selectedExercise={selectedExercise}
                onSuccess={handleSuccess}
            />
        </div>
    );
}

export default ManageExercise;
