import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../../../assets/images/hero.jpg"
import Wrapper from "./LoginWrapper";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginGoogleUser } from '../../../../redux/slices/systemSlice';
import Spinner from '../Spinner/Spinner';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLoading = useSelector((state) => state.system.isLoading);
    const isSuccess = useSelector((state) => state.system.isSuccess);
    const isFailed = useSelector((state) => state.system.isFailed);
    const dispatch = useDispatch();

    const validateCredentials = (email, password) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%^&*()_+={}\[\]:;"'<>,.?~`-])[A-Za-z\d!#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/;

        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Invalid email format', code: '1' };
        }

        if (!passwordRegex.test(password)) {
            return { valid: false, message: 'Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.', code: '1' };
        }

        return { valid: true };
    };

    const handleSignin = async () => {
        const validation = validateCredentials(email, password);
        if (!validation.valid) {
            toast.error(validation.message);
            return;
        }

        const res = await dispatch(loginUser({ email, password }));

        if (res.payload.EC === 0) {
            toast.success(res.payload.EM);
            dispatch({ type: 'system/loginUser/fulfilled' });
            navigate("/");
        } else {
            dispatch({ type: 'system/loginUser/rejected' });
            toast.error(res.payload.EM);
        }
    }

    const handleSigninGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await dispatch(loginGoogleUser(tokenResponse.access_token));

                if (res.payload.EC === 0) {
                    toast.success(res.payload.EM, { autoClose: 2000 });
                    navigate("/");
                } else {
                    dispatch({ type: 'system/loginUser/rejected' });
                    toast.error(res.payload.EM, { autoClose: 2000 });
                }
            } catch (error) {
                console.log(error);
                dispatch({ type: 'system/loginUser/rejected' });
                toast.error("An unexpected error occurred during login. Please try again later.", { autoClose: 2000 });
            }
        },
        onError: (error) => {
            console.log('Login Failed:', error);
            dispatch({ type: 'system/loginUser/rejected' });
            toast.error("Login failed due to a network issue. Please check your connection and try again.", { autoClose: 2000 });
        },
    });

    return (
        <Wrapper>
            {isLoading && <Spinner />}
            <div className="login"
                style={{ backgroundImage: `url(${hero})` }}>

                <div className="loginContain">
                    <h1>Login</h1>

                    <div className="register-link">
                        <p>You not have an <a href="">account?</a></p>
                    </div>

                    <div className="input">
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="summit" type='button' onClick={handleSignin} disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'SIGN IN'}
                        </button>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember Me</label>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>

                        <h3>—Or Sign In With—</h3>

                        <div className="otherway">
                            <button type="button" className="login-with-google-btn" onClick={() => handleSigninGoogle()} disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Sign in with Google'}
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </Wrapper>
    )
}

export default Login