export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Invalid email format' };
    }
    return { isValid: true };
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%^&*()_+={}\[\]:;"'<>,.?~`-])[A-Za-z\d!#$%^&*()_+={}\[\]:;"'<>,.?~`-]{8,}$/;
    if (!passwordRegex.test(password)) {
        return {
            isValid: false,
            message: 'Password must be at least 8 characters long and contain at least one uppercase letter, lowercase letter, number, and special character'
        };
    }
    return { isValid: true };
};

export const validateOTP = (otp) => {
    if (!otp || !/^[0-9]{6}$/.test(otp)) {
        return { isValid: false, message: 'Please enter a valid 6-digit OTP code' };
    }
    return { isValid: true };
};
