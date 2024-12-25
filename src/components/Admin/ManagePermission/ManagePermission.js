import { useState } from 'react';
import './ManagePermission.scss';
import { FiSearch } from "react-icons/fi";
import TablePermission from './TablePermission';
import ModalCreatePermission from './ModalCreatePermission';

function ManagePermission() {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPermission, setSelectedPermission] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleCreate = () => {
        setSelectedPermission(null);
        setShow(true);
    }

    const handleEdit = (permission) => {
        setSelectedPermission(permission);
        setShow(true);
    }

    const handleRefresh = () => {
        setShouldRefetch(prev => !prev);
    }

    return (
        <div className="managePermission">
            <div className="managePermissionHeader">
                <span className="managePermission__header__title">Manage Permissions</span>
                <div className='managePermission__header__search__div'>
                    <label htmlFor='managePermission__header__search' className='managePermission__header__search__icon'>
                        <FiSearch />
                    </label>
                    <input 
                        id='managePermission__header__search' 
                        className='managePermission__header__search' 
                        type="search" 
                        placeholder="Search for..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button onClick={handleCreate} className="managePermission__header__button">
                    Create Permission
                </button>
            </div>

            <div className="managePermissionContent">
                <TablePermission 
                    searchTerm={searchTerm} 
                    onEditPermission={handleEdit}
                    setShow={setShow}
                    shouldRefetch={shouldRefetch}
                />
            </div>
            
            <ModalCreatePermission 
                show={show} 
                setShow={setShow} 
                selectedPermission={selectedPermission}
                onSuccess={handleRefresh}
            />
        </div>
    );
}

export default ManagePermission;
