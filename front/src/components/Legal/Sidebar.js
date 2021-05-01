import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
export default function Sidebar() {
    return (
        <div className="sidebar ">
            <div className="legal-col space">
            <Link to="/legal"><h1 className="legal-subheading">Privacy</h1></Link>
            <Link to="/legal/tof"><h1 className="legal-subheading">Terms of Service</h1></Link>
            <Link to="/legal/returns"><h1 className="legal-subheading">Return</h1></Link>
            <Link to="/legal/disclamer"><h1 className="legal-subheading">Disclamer</h1></Link>
            </div>
        </div>
    )
}
