import React from "react";
import { useNavigate } from "react-router";
import '../styles/nav.css'

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

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className="nav-container">
            <div className="row-nav">
                <button className="button-home" onClick={goHome}>Home</button>
                <button className="button-login" onClick={goLogin}>Login</button>
                <button className="button-logout" onClick={logout}>Logout</button>
            </div>
        </div>
    )



}


export default SignedInNav