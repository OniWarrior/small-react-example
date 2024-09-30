import React, { useState } from "react";
import UnsignedNav from "./unsigned-nav";
import '../styles/login.css'
import { useNavigate } from "react-router";
import { postLogin } from "../state/actions/login-actions";
import useValidation from "../hooks/useValidation";
import { connect } from 'react-redux'
import LoginSchema from "../form-schema/login-form-schema";



const Login = (props) => {
    const navigate = useNavigate()

    const [login, errors, setLogin] = useValidation(LoginSchema)

    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (event) => {

        setLogin(event, LoginSchema)

    }

    const handleDisabled = (e) => {
        e.preventDefault()
        if (Login.email.length >= 30 && Login.password.length >= 5) {
            setDisabled(() => ({
                disabled: !disabled

            }))

        }
        else {
            setDisabled(() => ({
                disabled: disabled
            }))
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        props.postLogin(navigate, login)

    }




    return (
        <div className="login-container">
            <UnsignedNav />
            <div className="login-body">
                <div className="login-box">
                    <form className="login-form-container" onSubmit={onFormSubmit}>
                        <h2>Login</h2>

                        <div className="login-input-group">
                            <label className="label-login">
                                Email:
                                <input className="email-box"
                                    id='email'
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                    required
                                    onChange={change}
                                />
                            </label>
                            <div className="errors">
                                <p></p>
                            </div>
                            <label className="label-login">
                                Password:
                                <input className="password-box"
                                    id='password'
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    required
                                    onChange={change}
                                />
                            </label>
                            <div className="errors">
                                <p></p>
                            </div>

                            <button
                                type='submit'
                                className="login-submit"
                                disabled={handleDisabled}
                            >Login</button>



                        </div>

                    </form>
                </div>
            </div>

        </div>
    )



}

export default Login

