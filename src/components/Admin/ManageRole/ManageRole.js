import { useState } from 'react';
import './ManageRole.scss'
import { FiSearch } from "react-icons/fi";
import TableRole from './TableRole';
import ModalCreateRole from './ModalCreateRole';

function ManageRole() {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleCreate = () => {
        setSelectedRole(null);
        setShow(true);
    }

    const handleEdit = (role) => {
        setSelectedRole(role);
        setShow(true);
    }

    const handleRefresh = () => {
        setShouldRefetch(prev => !prev);
    }

    return (
        <div className="manageRole">
            <div className="manageRoleHeader">
                <span className="manageRole__header__title">Manage Roles</span>
                <div className='manageRole__header__search__div'>
                    <label htmlFor='manageRole__header__search' className='manageRole__header__search__icon'>
                        <FiSearch />
                    </label>
                    <input 
                        id='manageRole__header__search' 
                        className='manageRole__header__search' 
                        type="search" 
                        placeholder="Search for..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button onClick={handleCreate} className="manageRole__header__button">
                    Create Role
                </button>
            </div>

            <div className="manageRoleContent">
                <TableRole 
                    searchTerm={searchTerm} 
                    onEditRole={handleEdit}
                    setShow={setShow}
                    shouldRefetch={shouldRefetch}
                />
            </div>
            
            <ModalCreateRole 
                show={show} 
                setShow={setShow} 
                selectedRole={selectedRole}
                onSuccess={handleRefresh}
            />
        </div>
    );
}

export default ManageRole;
