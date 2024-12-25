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
import { MdHomeFilled, MdSecurity, MdVpnKey } from "react-icons/md";
import { FaUser, FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Sidebar.scss'
import sidebarHeader_logoImg from '../../../assets/images/logoImage2.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideBar = ({ images, collapsed, toggled, handleToggleSidebar }) => {
    const navigative = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <ProSidebar
            // collapsed={collapsed}
            // toggled={toggled}
            breakPoint="md"
        // onToggle={handleToggleSidebar}
        >
            <SidebarHeader className='sidebarHeader'>
                <div
                    className='sidebarHeader_logoTitle'
                    style={{
                        padding: '24px',
                        // textTransform: 'uppercase',
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
                        active={activeIndex === 0}
                        onClick={() => (setActiveIndex(0), navigative(''))}
                    // suffix={<span className="badge red">Dev Pham</span>}
                    >
                        Dashboard
                    </MenuItem>


                    <MenuItem
                        icon={<FaUser />}
                        className='sidebarItem'
                        active={activeIndex === 1}
                        onClick={() => (setActiveIndex(1), navigative('manage-user'))}
                    >
                        Manage User
                    </MenuItem>

                    <MenuItem
                        icon={<FaBookOpen />}
                        className='sidebarItem'
                        active={activeIndex === 2}
                        onClick={() => (setActiveIndex(2), navigative('manage-exercise'))}
                    >
                        Manage Exercise
                    </MenuItem>

                    <MenuItem
                        icon={<MdSecurity />}
                        className='sidebarItem'
                        active={activeIndex === 3}
                        onClick={() => (setActiveIndex(3), navigative('manage-role'))}
                    >
                        Manage Roles
                    </MenuItem>

                    <MenuItem
                        icon={<MdVpnKey />}
                        className='sidebarItem'
                        active={activeIndex === 4}
                        onClick={() => (setActiveIndex(4), navigative('manage-permission'))}
                    >
                        Manage Permissions
                    </MenuItem>
                </Menu>
                {/* <Menu iconShape="circle">
                    <SubMenu
                        // suffix={<span className="badge yellow">Features</span>}
                        title="Features"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>
                            Manage Users
                            <Link to='/admin/manage-user' />
                        </MenuItem>
                        <MenuItem>
                            Manage Exercise
                            <Link to='/admin/manage-exercise' />
                        </MenuItem>
                    </SubMenu>
                </Menu> */}
            </SidebarContent>

            <SidebarFooter className='sidebarFooter' style={{ textAlign: 'center' }}>
                <button type='button' className='btn btn-primary btnSidebarFooter'
                    onClick={() => { navigative('/') }}
                >
                    Go to Home Page <MdHomeFilled />
                </button>
                {/* <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            View source
                        </span>
                    </a>
                </div> */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;