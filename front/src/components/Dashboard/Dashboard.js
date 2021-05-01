import React from 'react'
import './Dashboard.css'
import HeaderDashboard from "./HeaderDashboard"
import SideBarDashobard from "./SideBarDashobard"
import MainDashBoard from "./MainDashBoard"

export default function Dashboard() {
    return (
        <div className="dashboard">
   
            <HeaderDashboard />
            <div className="DashboardRow">
                <SideBarDashobard />
                <div className="mainasd">
                    <MainDashBoard />
                </div>

            </div>
        </div>
    )
}
