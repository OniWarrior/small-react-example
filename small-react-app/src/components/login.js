import React from "react";
import UnsignedNav from "./unsigned-nav";
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }


}

export default Login

