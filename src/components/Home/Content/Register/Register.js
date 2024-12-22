import React, { useState, useEffect } from "react";
import Wrapper from "./RegisterWrapper";
import hero2 from "../../../../assets/images/hero2.jpg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { postRegister, sendOTP } from "../../../../util/authenAxios/authenApi";
import Spinner from "../../../Spinner/Spinner";

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [notification, setNotification] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSendOTP = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address first.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await sendOTP(email);
            if (response.EC === 0) {
                toast.success("OTP sent successfully! Please check your email.");
            } else {
                toast.error(response.EM || "Failed to send OTP");
            }
        } catch (error) {
            toast.error("Error sending OTP. Please try again.");
            console.error("OTP send error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async () => {
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%^&*()_+={}\[\]:;"'<>,.?~`-])[A-Za-z\d!#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.");
            return;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        // OTP validation
        if (!otp || !/^[0-9]{6}$/.test(otp)) {
            toast.error("Please enter a valid 6-digit OTP code.");
            return;
        }

        setIsLoading(true);
        try {
            const res = await postRegister(email, password, otp);

            if (res.EC === -1) {
                // Handle timeout/system error
                toast.error(res.EM);
            } else if (res.EC === 0) {
                toast.success(res.EM || "Registration successful!");
                navigate("/login");
            } else {
                toast.error(res.EM || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("System error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (notification) {
            toast(notification);
        }
    }, [notification]);

    return (
        <Wrapper>
            {isLoading && <Spinner />}
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
                        <div className="otp-container">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button type="button" className="send-otp" onClick={handleSendOTP}>
                                Send OTP
                            </button>
                        </div>
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