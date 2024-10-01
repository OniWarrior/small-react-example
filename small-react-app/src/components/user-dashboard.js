import React from "react";
import SignedInNav from "./signed-in-nav";
import '../styles/dashboard.css'


const Dashboard = () => {

    return (
        <div className="dashboard">
            <SignedInNav />
            <div className="dashboard-body">
                <div className="dashboard-box">
                    <h1>User Dashboard</h1>
                    <p>Welcom to the user dashboard</p>
                </div>

            </div>
        </div>
    )

}

export default Dashboard