import React from 'react'
import './Header.css'
import Search from './Home/assets/iconfinder_search-zoom-fit_2931190.svg'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className="header">  
         <Link className="logo" to="/"> <h1 >factDB.net</h1></Link>
            <div className="menu">
           <Link to="/ledger" className=" " style={{marginLeft:"60px"}}><h3 className="" ><small>Ledger</small></h3></Link> 
            <button className="SignUp menu-item" style={{marginLeft:"60px"}}> <Link to="/register">  Sign-In </Link></button>
            </div>
        </div>
    )
}
