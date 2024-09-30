import React, { useState } from "react";
import UnsignedNav from "./unsigned-nav";
import '../styles/login.css'
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate()
    //TODO add form schema
    //const[login,errors,setLogin] =useValidation(LoginFormSchema)

    const initialDisabled = true
    const [disabled, setDisabled] = useState(initialDisabled)

    const change = (event) => {
        // TODO add form schema
        // setLogin(event,LoginFormSchema)

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





    return (
        <div className="login-container">
            <UnsignedNav />

        </div>
    )



}

export default Login

