import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../../../assets/images/hero.jpg"
import Wrapper from "./LoginWrapper";
import { useNavigate } from "react-router-dom";
import { postLogin, getLoginGoogle } from "../../../../util/authenApi";
import { notification } from "antd";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignin = async () => {
        const res = await postLogin(email, password);

        if (res.data.EC === 0) {
            localStorage.setItem("token", res.token)
            notification.success({
                message: "LOGIN SUCCESS",
                description: "Success"
            });
            navigate("/");

        } else {
            notification.error({
                message: "LOGIN FAIL",
                description: "error"
            })
        }
    }

    const handleLoginGoogle = async () => {
        const res = await getLoginGoogle()
        //window.location.href = `${process.env.REACT_APP_BACKEND_SSO_URL}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }
    return (
        <Wrapper>
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

                        <button className="summit" type='button' onClick={handleSignin}>SIGN IN</button>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember Me</label>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>

                        <h3>—Or Sign In With—</h3>

                        <div className="otherway">
                            <button onClick={handleLoginGoogle}>Google</button>
                            <button href="">Facebook</button>
                        </div>
                    </div>

                </div>

            </div>
        </Wrapper>
    )
}

export default Login