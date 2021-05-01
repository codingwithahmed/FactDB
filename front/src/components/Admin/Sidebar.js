import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className='admin-sidebar'>.
        <span className="admin-logo">
            <h1 className="admin-logo-header">Admin Pannel</h1>
        </span>
            
            <ul className='admin-sidebar-list'>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin'>Find User</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/edituser'>Edit User</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/createuser'>Create User</Link></li>
                <li className='admin-sidebar-list-item' ><Link className='admin-sidebar-list-item-link' to='/admin/deleteuser'>Delete User</Link></li>
            </ul>
            <hr style={{width:"80%",margin:"auto"}}/>
            <ul className='admin-sidebar-list'>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/findpost'>Find Post</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/editpost'>Edit Post</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/createpost'>Create Post</Link></li>
                <li className='admin-sidebar-list-item' ><Link className='admin-sidebar-list-item-link' to='/admin/deletepost'>Delete Post</Link></li>
            </ul>
            <hr style={{width:"80%",margin:"auto"}}/>

            <ul className='admin-sidebar-list'>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/finduser'>Users list</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/info'>Info List</Link></li>
                <li className='admin-sidebar-list-item'><Link className='admin-sidebar-list-item-link' to='/admin/complain'>Complain List</Link></li>
            </ul>
        </div>
    )
}
