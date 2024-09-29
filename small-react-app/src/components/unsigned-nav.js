import React from "react";
import { useNavigate } from "react-router";

const UnsignedNav = () => {
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className="nav-container">
            <div className="row-nav">
                <button className="button-home" onClick={goHome}></button>
            </div>
        </div>
    )

}

export default UnsignedNav