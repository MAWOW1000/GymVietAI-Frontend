import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser, loginGoogleUser } from '../../../../redux/slices/systemSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import styled from "styled-components";
import { GoogleOAuthProvider } from '@react-oauth/google';

const StyledModal = styled(Modal)`
    .modal-content {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
    }
    
    .modal-body {
        padding: 2rem;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .password-container {
        position: relative;
        margin-bottom: 15px;
    }

    .eye-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .login-btn {
        width: 100%;
        padding: 10px;
        background-color: #20409A;
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 15px;
        cursor: pointer;
    }

    .google-btn {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;

function LoginModalContent({ show, onHide, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const validateCredentials = (email, password) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%^&*()_+={}\[\]:;"'<>,.?~`-])[A-Za-z\d!#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/;

        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Invalid email format' };
        }
        if (!passwordRegex.test(password)) {
            return { valid: false, message: 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character' };
        }
        return { valid: true };
    };

    const handleLogin = async () => {
        const validation = validateCredentials(email, password);
        if (!validation.valid) {
            toast.error(validation.message);
            return;
        }

        const res = await dispatch(loginUser({ email, password }));
        if (res.payload.EC === 0) {
            onLoginSuccess();
            onHide();
        } else {
            toast.error(res.payload.EM);
        }
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await dispatch(loginGoogleUser(tokenResponse.access_token));
                if (res.payload.EC === 0) {
                    onLoginSuccess();
                    onHide();
                } else {
                    toast.error(res.payload.EM);
                }
            } catch (error) {
                toast.error("Login failed. Please try again.");
            }
        }
    });

    return (
        <StyledModal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login Required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </div>
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
                <button className="google-btn" onClick={() => handleGoogleLogin()}>
                    <img
                        width="20"
                        height="20"
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                    />
                    Sign in with Google
                </button>
            </Modal.Body>
        </StyledModal>
    );
}

function LoginModal(props) {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <LoginModalContent {...props} />
        </GoogleOAuthProvider>
    );
}

export default LoginModal;

