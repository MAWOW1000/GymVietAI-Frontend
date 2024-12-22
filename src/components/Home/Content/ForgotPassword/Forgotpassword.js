import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hero3 from "../../../../assets/images/hero3.jpg";
import Wrapper from "./ForgotpasswordWrapper";
import { toast } from 'react-toastify';
import { sendOTP, resetPassword } from "../../../../util/authenAxios/authenApi";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Spinner from "../../../Spinner/Spinner";

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendOTP = async () => {
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        try {
            const response = await sendOTP(email);
            if (response && response.EC === 0) {
                toast.success("OTP sent successfully! Please check your email.");
            } else {
                toast.error(response?.EM || "System error. Please try again later.");
            }
        } catch (error) {
            console.error("Send OTP error:", error);
            toast.error(error?.response?.data?.EM || "System error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const clearFields = () => {
        setOtp('');
        setConfirmPassword('');
    };

    const handleResetPassword = async () => {
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (!otp.match(/^[0-9]{6}$/)) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%^&*()_+={}\[\]:;"'<>,.?~`-])[A-Za-z\d!#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            toast.error("Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoading(true);
        try {
            const response = await resetPassword(email, otp, newPassword);
            if (response.EC === 0) {
                toast.success("Password reset successful!");
                clearFields();
                navigate("/login");
            } else {
                toast.error(response.EM || "Failed to reset password");
            }
        } catch (error) {
            toast.error("Failed to reset password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Wrapper>
            {isLoading && <Spinner />}
            <div className="forgotpassword" style={{ backgroundImage: `url(${hero3})` }}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1>Reset Password</h1>
                    <div className="des">
                        <span>Enter your email to receive an OTP code</span>
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
                            <button type="button" onClick={handleSendOTP}>
                                Send OTP
                            </button>
                        </div>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <div className="password-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                    </div>

                    <button className="commit" onClick={handleResetPassword}>
                        Reset Password
                    </button>

                    <div className="goback">
                        <Link to="/login">Back to Sign in</Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

export default ForgotPassword;