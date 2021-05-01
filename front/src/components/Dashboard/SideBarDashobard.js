import React from 'react'
import './SideBarDashobard.css'
import Avatar from '@material-ui/icons/PersonOutlineOutlined'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import SocialMedaIcon from '@material-ui/icons/AddCircle'
import HelpIcon from '@material-ui/icons/Help'
import SettingIcon from '@material-ui/icons/Settings'
import Button from '@material-ui/core/Button/Button'
import {Link} from 'react-router-dom'
export default function SideBarDashobard() {
    return (
        <div className="sidebardashboard">

 
 
            <div className=" sidebardashboard-item sidebardashboard-menu-list">

               <Link to="/dashboard" className="sidebardashboard-menu-item">
                <p>Dashboard</p>
                 <HomeIcon  className="sidebardashboard-Icon"/>
               </Link>
               <Link to="/dashboard/tweet" className="sidebardashboard-menu-item">
               <p>Check</p>
                <SearchIcon className="sidebardashboard-Icon"/>
               </Link>
               <Link to="/dashboard/search" className="sidebardashboard-menu-item">
              <p> Submit </p> 
                 <SocialMedaIcon className="sidebardashboard-Icon"/>
               </Link>
               <Link className="sidebardashboard-menu-item" to="/dashboard/help">
               <p> Help </p> 
                 <HelpIcon className="sidebardashboard-Icon"/>
               </Link>
             <div className=" sidebardashboard-menu-item" style={{display:"none"}}>
                <p>Setting</p>
                 <SettingIcon className="sidebardashboard-Icon"/>
               </div>

            </div>
            
        </div>
    )
}
