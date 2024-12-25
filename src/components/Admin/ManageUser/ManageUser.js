import { useState } from 'react';
import './ManageUser.scss'
import { FiSearch } from "react-icons/fi";
import TableUser from './TableUser';
import ModalCreateUser from './ModalCreateUser';

function ManageUser() {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleCreate = () => {
        setSelectedUser(null);
        setShow(true);
    }

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShow(true);
    }

    const handleRefresh = () => {
        setShouldRefetch(prev => !prev);
    }

    return (
        <div className="manageUser">
            <div className="manageUserHeader">
                <span className="manageUser__header__title">Manage User</span>
                <div className='manageUser__header__search__div'>
                    <label htmlFor='manageUser__header__search' className='manageUser__header__search__icon'>
                        <FiSearch />
                    </label>
                    <input 
                        id='manageUser__header__search' 
                        className='manageUser__header__search' 
                        type="search" 
                        placeholder="Search for..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button onClick={handleCreate} className="manageUser__header__button">
                    Create User
                </button>
            </div>

            <div className="manageUserContent">
                <TableUser 
                    searchTerm={searchTerm} 
                    onEditUser={handleEdit}
                    setShow={setShow}
                    shouldRefetch={shouldRefetch}  // Add this prop
                />
            </div>
            
            <ModalCreateUser 
                show={show} 
                setShow={setShow} 
                selectedUser={selectedUser}
                onSuccess={handleRefresh}  // Add this prop
            />
        </div>
    );
}

export default ManageUser;
