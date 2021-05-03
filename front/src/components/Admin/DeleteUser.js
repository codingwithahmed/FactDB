import React, {useState} from 'react'
import './User.css'
import axios from "axios"


export default function DeleteUser() {
    const [email, setEmai] = useState('')
    const [username, setUsername] = useState('')

  
const handleDeleteUser = async () => {
   
    const res = await axios.delete(`/api/api/admin/deleteuser/${email}` , {
        email : email,
    })

    try {
        if(res.data == null ){
          setUsername('Could not find any user by this email ')
      }
        else{ 
            setUsername(res.data.username )
        }
    } catch (error) {
        console.log(error)
    }

}


    return (
        <div className="admin-container">
            <h1 className='admin-top'>Delete User by email</h1>
            <div className='admin-input-container ' > 
            <div>
            <input className='admin-input '  onChange = {(e) => {setEmai(e.target.value)}} />
            <button onClick={handleDeleteUser} className="admin-btn">Delete User</button>
            </div>
            <h1>User : {username}</h1>
    
            </div>
        </div>
    )
}








