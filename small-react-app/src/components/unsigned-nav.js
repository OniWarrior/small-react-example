import React from "react";
import { useNavigate } from "react-router";
import '../styles/nav.css'

const UnsignedNav = () => {
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const goLogin = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return (
        <div className="nav-container">
            <div className="row-nav">
                <button className="button-home" onClick={goHome}>Home</button>
                <button className="button-login" onClick={goLogin}>Login</button>
            </div>
        </div>
    )

}

export default UnsignedNav