import './ManageExercise.scss'
import { FiSearch } from "react-icons/fi";
import TableExercise from './TableExercise';
import { useState } from 'react';
import ModalCreateExercise from './ModalCreateExercise';

function ManageExercise() {
    const [show, setShow] = useState(false);

    const handleCreate = () => {
        setShow(true)
    }
    return (
        <div className="manageExercise">
            <div className="manageExerciseHeader">
                <span className="manageExercise__header__title">Manage Exercise</span>
                <div className='manageExercise__header__search__div'>
                    <label htmlFor='manageExercise__header__search' className='manageExercise__header__search__icon'><FiSearch /></label>
                    <input id='manageExercise__header__search' className='manageExercise__header__search' type="search" placeholder="Search for..." />
                </div>
                <button className="manageExercise__header__button" onClick={handleCreate}>Create Exercise</button>
            </div>

            <div className="manageExerciseContent">
                <TableExercise />
            </div>
            <ModalCreateExercise show={show} setShow={setShow}/>
        </div>
    );
}

export default ManageExercise;
