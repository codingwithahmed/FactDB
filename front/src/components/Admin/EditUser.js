import React, {useState,useEffect} from 'react'
import './User.css'
import axios from "axios"


export default function EditUser() {
    const [email, setEmai] = useState('')
    const [username, setUsername] = useState('')
    const[inp,setInput] = useState('')
    const [id , setId ] = useState('')
    const [item,setItem] = useState()
  
const handleEditUser = async () => {
   
    const res = await axios.put(`/api/api/admin/updateuser/${email}` , {
        email : email,
        username : username
    })

    try {
        if(res.data == null ){
          setUsername('Could not find any user by this email ')
      }
        else{ 
            setInput(res.data.email)             
            setUsername(res.data.username)
            setId(res.data._id)
            setItem(zas)
        }
    } catch (error) {
        console.log(error)
    }

}

const zas =   <>
<div>
 <button  className="admin-btn">Username</button>
 <input className='admin-input '  onChange = {(e) => {setUsername(e.target.value)}} required/>
 </div>
 <br />
 <div>
 <input className='admin-input '  onChange = {(e) => {setEmai(e.target.value)}} required/>
 <button  className="admin-btn">Email</button>
 </div>

 <button onClick={handleEditUser} className="admin-btn admin-done">Done</button>
</>
 
    return (
        <div className="admin-container">
            <h1 className='admin-top'>Edit User by email</h1>
            <div className='admin-input-container ' > 
           
            
          {zas}
          
          <h1>Username : {username}</h1>
          <h2>Email : {inp}</h2>
          <h2>Database ID : {id}</h2>
          
            </div>
        </div>
    )
}
