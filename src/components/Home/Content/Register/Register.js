import React, { useState, useEffect } from "react";
import Wrapper from "./RegisterWrapper";
import hero2 from "../../../../assets/images/hero2.jpg"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { postRegister } from "../../../../util/authenAxios/authenApi";

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [notification, setNotification] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleCreate = async () => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setNotification("Please enter a valid email address.");
            return; // Exit the function if the email is invalid
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>])[A-Za-z\d@$!%*?&<>]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.");
            return; // Exit the function if the password is invalid
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return; // Exit the function if passwords do not match
        }

        const res = await postRegister(email, password);

        if (res.EC === 0) {
            localStorage.setItem("token", res.token);
            toast.success("User created successfully!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/login");
        } else {
            toast.error(`Error: ${res.EM}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        if (notification) {
            toast(notification);
        }
    }, [notification]);

    return (
        <Wrapper>
            <div className="register"
                style={{ backgroundImage: `url(${hero2})` }}>

                <form>
                    <h1>Register</h1>

                    <div className="login-link">
                        <p>Already have an <a href="">account?</a></p>
                    </div>

                    <div className="input">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="divEyes">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="iconEyes" onClick={togglePasswordVisibility}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <div className="divEyes">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="iconEyes" onClick={toggleConfirmPasswordVisibility}>
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>

                        <button type="button" className="commit" onClick={handleCreate}>CREATE ACCOUNT</button>

                    </div>

                </form>
            </div>
        </Wrapper>
    )
}

export default Register