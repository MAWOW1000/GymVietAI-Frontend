import React, { useState, useEffect, useRef } from 'react';
import Wrapper from './HeaderWrapper';
import homepagelogo from '../../../assets/images/homepagelogo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaChevronDown, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Header.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, toggleLanguage } from '../../../redux/slices/systemSlice';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

function Header() {
    const navigator = useNavigate()
    const dispatch = useDispatch();
    const { fullname, picture, isLogin, isLoading, language } = useSelector((state) => state.system);

    const [scrolling, setScrolling] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    const handleLogIn = () => {
        navigator('/login')
    }
    const handleSignUp = () => {
        navigator('/register')
    }

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleProfile = () => {
        navigator('/profile');
    };

    const handleGoPremium = () => {
        navigator('/premium');
    };

    const handleLogOut = async () => {
        const res = await dispatch(logoutUser());
        if (res.payload.EC === 0) {
            toast.success(res.payload.EM);
        } else {
            toast.error(res.payload.EM);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageToggle = () => {
        dispatch(toggleLanguage());
    };

    return (
        <Wrapper className={scrolling ? 'scrolled' : ''}>
            {isLoading && <Spinner />}
            <div className="logo-container container" onClick={() => navigator('/')}>
                <img src={homepagelogo} alt="Logo" className="logo" />
            </div>
            <nav className="navbar header_navbar">
                <ul className="nav-links">
                    <li><NavLink to='/'>{language === 'EN' ? 'Home' : 'Trang Chủ'}</NavLink></li>
                    <li><NavLink to='/exercise'>{language === 'EN' ? 'Exercise' : 'Bài Tập'}</NavLink></li>
                    <li><NavLink to='/dictionary'>{language === 'EN' ? 'Dictionary' : 'Từ Điển'}</NavLink></li>
                    <li><NavLink to='/workout'>{language === 'EN' ? 'Workout' : 'Lịch Tập'}</NavLink></li>
                    <li><NavLink to='/nutrition'>{language === 'EN' ? 'Meal' : 'Lịch Ăn'}</NavLink></li>
                </ul>

                <div className="switch">
                    <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={handleLanguageToggle} />
                    <label htmlFor="language-toggle"></label>
                    <span className="on">EN</span>
                    <span className="off">VI</span>
                </div>

                {isLogin ? (
                    <div
                        className='user-info'
                        onClick={toggleDropdown}
                    >
                        <img src={picture} alt={fullname} className="user-picture" onClick={toggleDropdown} />
                        <span className="user-name" onClick={toggleDropdown}>{fullname}</span>
                        <i className="user-name-icon" onClick={toggleDropdown}><FaChevronDown /></i>
                        {dropdownVisible && (
                            <div className="dropdown-menu" ref={dropdownRef}>
                                <div onClick={handleProfile}>
                                    {language === 'EN' ? 'Profile' : 'Hồ Sơ'}
                                </div>
                                <div onClick={handleGoPremium}>
                                    {language === 'EN' ? 'Go Premium' : 'Nâng Cấp'}
                                </div>
                                <div onClick={handleLogOut}>
                                    {language === 'EN' ? 'Log out' : 'Đăng Xuất'}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='buttonGroup'>
                        <button type="button" className="btnLogin btn btn-outline-light" onClick={handleLogIn}>
                            {language === 'EN' ? 'Log In' : 'Đăng Nhập'}
                        </button>
                        <button type="button" className="btnSignup btn btn-secondary" onClick={handleSignUp}>
                            {language === 'EN' ? 'Sign Up' : 'Đăng Ký'}
                        </button>
                    </div>
                )}
            </nav>
        </Wrapper>
    );
}

export default Header;
