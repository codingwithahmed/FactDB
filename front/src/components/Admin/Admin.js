import React,{useEffect,useState} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Sidebar from './Sidebar'
import Main from './Main'
import Login from './Login'
import './Admin.css'
function Admin() {
    return (
        <div className="admin">
            <Sidebar />
            <Main />
        </div>
    )
}



export default function TAdmin() {
const [logged, setLogged] = useState('')

    
  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
        setLogged('true')
        console.log(logged)
    }
    else{
        setLogged("false")
        console.log(logged)

    }
  }, []);    
                return logged =='true' ? (<Admin />) : (<Login />)
 
}