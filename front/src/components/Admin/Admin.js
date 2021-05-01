import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import './Admin.css'
export default function Admin() {
    return (
        <div className="admin">
            <Sidebar />
            <Main />
        </div>
    )
}
