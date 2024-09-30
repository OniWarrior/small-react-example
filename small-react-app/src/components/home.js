import React from "react";
import UnsignedNav from "./unsigned-nav";
import '../styles/home.css'


const Home = () => {

    return (
        <div className="home-container">
            <UnsignedNav />
            <div className="home-body">
                <div className="home-box">
                    <h1>Small React App</h1>
                    <p>This is a small training app to get the basics of React</p>

                </div>

            </div>


        </div>

    )

}

export default Home