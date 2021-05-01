import React from 'react'
import './HeaderDashboard.css'

import {Link} from 'react-router-dom'
export default function HeaderDashboard() {
    return (
        <div className = "headerdashboard">
            <div className="headerdashboard-item">
               <h1 className="headerdashboard-logo"> <Link to="/dashboard">factDB</Link> </h1>
            </div>

        </div>
    )
}
