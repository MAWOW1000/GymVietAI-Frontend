import { useState } from 'react';
import './ManagePermissionRole.scss'
import { FiSearch } from "react-icons/fi";
import TablePermissionRole from './TablePermissionRole';
import ModalPermissionRole from './ModalPermissionRole';

function ManagePermissionRole() {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPermissionRole, setSelectedPermissionRole] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleCreate = () => {
        setSelectedPermissionRole(null);
        setShow(true);
    }

    const handleEdit = (permissionRole) => {
        setSelectedPermissionRole(permissionRole);
        setShow(true);
    }

    const handleRefresh = () => {
        setShouldRefetch(prev => !prev);
    }

    return (
        <div className="managePermissionRole">
            <div className="managePermissionRoleHeader">
                <span className="managePermissionRole__header__title">Manage Permission-Role</span>
                <div className='managePermissionRole__header__search__div'>
                    <label htmlFor='managePermissionRole__header__search' className='managePermissionRole__header__search__icon'>
                        <FiSearch />
                    </label>
                    <input
                        id='managePermissionRole__header__search'
                        className='managePermissionRole__header__search'
                        type="search"
                        placeholder="Search for..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button onClick={handleCreate} className="managePermissionRole__header__button">
                    Create Per-Role
                </button>
            </div>

            <div className="managePermissionRoleContent">
                <TablePermissionRole
                    searchTerm={searchTerm}
                    onEditPermissionRole={handleEdit}
                    setShow={setShow}
                    shouldRefetch={shouldRefetch}
                />
            </div>

            <ModalPermissionRole
                show={show}
                setShow={setShow}
                selectedPermissionRole={selectedPermissionRole}
                onSuccess={handleRefresh}
            />
        </div>
    );
}

export default ManagePermissionRole;
