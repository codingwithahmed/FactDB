import React from 'react'
import './SideBarDashobard.css'
import Avatar from '@material-ui/icons/PersonOutlineOutlined'
import HomeIcon from '@material-ui/icons/Home'
import SocialMedaIcon from '@material-ui/icons/AddCircle'
import HelpIcon from '@material-ui/icons/Help'
import SettingIcon from '@material-ui/icons/Settings'
import {Link} from 'react-router-dom'
export default function SideBarDashobard() {
  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("authToken")
    localStorage.removeItem("username")
    
  }
    return (
        <div className="sidebardashboard">

 
 
            <div className=" sidebardashboard-menu-list">

               <Link to="/dashboard" className="sidebardashboard-menu-item" style={{color:"blue"}}>
                <p>Dashboard</p>
                 <HomeIcon  className="sidebardashboard-Icon"/>
               </Link>
               
               <Link to="/dashboard/submit" className="sidebardashboard-menu-item" style={{color:"blue"}}>
              <p> Submit </p> 
                 <SocialMedaIcon className="sidebardashboard-Icon"/>
               </Link>
               <Link className="sidebardashboard-menu-item" to="/dashboard/help" style={{color:"blue"}}>
               <p> Help </p> 
                 <HelpIcon className="sidebardashboard-Icon"/>
               </Link>
               <Link className="sidebardashboard-menu-item" to="/dashboard/setting" style={{color:"blue"}}>
               <p> Setting </p> 
                 <SettingIcon className="sidebardashboard-Icon"/>
               </Link>
               <Link onClick={handleLogout} className="sidebardashboard-menu-item" style={{color:"blue"}}>
               <p > Logout </p> 
                 <Avatar className="sidebardashboard-Icon"/>
               </Link>

            </div>
            
        </div>
    )
}
