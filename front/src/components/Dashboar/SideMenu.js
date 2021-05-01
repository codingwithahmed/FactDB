import React from 'react'
import "./SideMenu.css"
import CH from './assets/about.svg'
import {Link} from 'react-router-dom'

function SideMenu() {
    return (
       
        <div className="sidemenu">
            <div className="sidemenu-item">
                <h1 className="sidemenu-item-logo">Factify</h1>
            </div>
            <div className="sidemenu-item sidemenu-list">
                   <div className="sidemenu-list-item ">
                   <svg data-name="Livello 1" className="sidemenu-list-item-img sidemenu-list-item-active" fill="red" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z"></path></svg>
                      <h4 className="sidemenu-list-item-text"><Link to="/dashboard"> Dashboard </Link></h4>
                   </div>
                   <div className="sidemenu-list-item">
                   <svg data-name="Livello 1" className="sidemenu-list-item-img" fill="red" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z"></path></svg>
                      <h4 className="sidemenu-list-item-text"><Link to="/dashboard/search">Search</Link></h4>
                   </div>
                   <div className="sidemenu-list-item">
                   <svg data-name="Livello 1" className="sidemenu-list-item-img" fill="red" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z"></path></svg>
                      <h4 className="sidemenu-list-item-text"><Link to="/dashboard/tweets">Tweets</Link></h4>
                   </div>
                   <div className="sidemenu-list-item">
                   <svg data-name="Livello 1" className="sidemenu-list-item-img" fill="red" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M127.12,60.22,115.46,48.56h0L69,2.05a7,7,0,0,0-9.9,0L12.57,48.53h0L.88,60.22a3,3,0,0,0,4.24,4.24l6.57-6.57V121a7,7,0,0,0,7,7H46a7,7,0,0,0,7-7V81a1,1,0,0,1,1-1H74a1,1,0,0,1,1,1v40a7,7,0,0,0,7,7h27.34a7,7,0,0,0,7-7V57.92l6.54,6.54a3,3,0,0,0,4.24-4.24ZM110.34,121a1,1,0,0,1-1,1H82a1,1,0,0,1-1-1V81a7,7,0,0,0-7-7H54a7,7,0,0,0-7,7v40a1,1,0,0,1-1,1H18.69a1,1,0,0,1-1-1V51.9L63.29,6.29a1,1,0,0,1,1.41,0l45.63,45.63Z"></path></svg>
                      <h4 className="sidemenu-list-item-text"><Link to="/dashboard/contact">Get Help</Link></h4>
                   </div>
            </div>
            <div className="sidemenu-item">

            </div>
        </div>
        
    )
}

export default SideMenu
