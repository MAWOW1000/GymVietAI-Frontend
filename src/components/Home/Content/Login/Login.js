import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../../../assets/images/hero.jpg"
import Wrapper from "./LoginWrapper";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../../util/api";
import { notification } from "antd";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignin = async () => {
        const res = await postLogin(email, password);

        if (!res.message) {
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
    return (
        <Wrapper>
            <div className="login"
                style={{ backgroundImage: `url(${hero})` }}>

                <form>
                    <h1>Login</h1>

                    <div className="register-link">
                        <p>You not have an <Link to="/register">account?</Link></p>
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
                            <button href="">Facebook</button>
                            <button href="">Twitter</button>
                        </div>
                    </div>

                </form>

            </div>
        </Wrapper>
    )
}

export default Login