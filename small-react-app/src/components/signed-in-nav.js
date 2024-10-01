import React from "react";
import { useNavigate } from "react-router";
import '../styles/unsigned-nav.css'

const SignedInNav = () => {
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const goLogin = (e) => {
        e.preventDefault()
        navigate('/login')
    }





}


export default SignedInNav