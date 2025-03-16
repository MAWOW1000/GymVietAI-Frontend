import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { MdHomeFilled, MdSecurity, MdVpnKey, MdLink } from "react-icons/md"; // Add MdLink
import { FaUser, FaBookOpen, FaShoppingCart } from "react-icons/fa"; // Add FaShoppingCart
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss'
import sidebarHeader_logoImg from '../../../assets/images/logoImage2.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideBar = ({ images, collapsed, toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveIndex = (path) => {
        switch (path) {
            case '/admin': return 0;
            case '/admin/manage-user': return 1;
            case '/admin/manage-exercise': return 2;
            case '/admin/manage-role': return 3;
            case '/admin/manage-permission': return 4;
            case '/admin/manage-permission-role': return 5; // Add this line
            case '/admin/manage-order': return 6; // Add this line
            default: return 0;
        }
    }

    const currentIndex = getActiveIndex(location.pathname);

    return (
        <ProSidebar
            breakPoint="md"
        >
            <SidebarHeader className='sidebarHeader'>
                <div
                    className='sidebarHeader_logoTitle'
                    style={{
                        padding: '24px',
                        fontWeight: 600,
                        fontSize: 20,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: '#FFFFFF',
                        lineHeight: 1.334,
                    }}
                >
                    <img className='sidebarHeader_logoImg' src={sidebarHeader_logoImg} />
                    GymViet
                </div>
            </SidebarHeader>

            <SidebarContent className='sidebarContent'>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<MdHomeFilled />}
                        className='sidebarItem'
                        active={currentIndex === 0}
                        onClick={() => navigate('')}
                    >
                        Dashboard
                    </MenuItem>

                    <MenuItem
                        icon={<FaUser />}
                        className='sidebarItem'
                        active={currentIndex === 1}
                        onClick={() => navigate('manage-user')}
                    >
                        Manage User
                    </MenuItem>

                    <MenuItem
                        icon={<FaBookOpen />}
                        className='sidebarItem'
                        active={currentIndex === 2}
                        onClick={() => navigate('manage-exercise')}
                    >
                        Manage Exercise
                    </MenuItem>

                    <MenuItem
                        icon={<MdSecurity />}
                        className='sidebarItem'
                        active={currentIndex === 3}
                        onClick={() => navigate('manage-role')}
                    >
                        Manage Roles
                    </MenuItem>

                    <MenuItem
                        icon={<MdVpnKey />}
                        className='sidebarItem'
                        active={currentIndex === 4}
                        onClick={() => navigate('manage-permission')}
                    >
                        Manage Permissions
                    </MenuItem>

                    <MenuItem
                        icon={<MdLink />} // Changed icon here
                        className='sidebarItem'
                        active={currentIndex === 5}
                        onClick={() => navigate('manage-permission-role')}
                    >
                        Manage Per-Role
                    </MenuItem>

                    <MenuItem
                        icon={<FaShoppingCart />} // Add this line
                        className='sidebarItem'
                        active={currentIndex === 6}
                        onClick={() => navigate('manage-order')}
                    >
                        Manage Orders
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter className='sidebarFooter' style={{ textAlign: 'center' }}>
                <button type='button' className='btn btn-primary btnSidebarFooter'
                    onClick={() => { navigate('/') }}
                >
                    Go to Home Page <MdHomeFilled />
                </button>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;