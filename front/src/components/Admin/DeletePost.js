
import React, {useState} from 'react'
import './User.css'
import axios from "axios"


export default function DeletePost() {
    const [id, setId] = useState('')
    const [headline, setHeadline] = useState('')

  
const handleDeleteUser = async () => {
   
    const res = await axios.delete(`/api/admin/deletepost/${id}` , {
        _id : id,
    })

    try {
        if(res.data == null ){
            setHeadline('Could not find any user by this email ')
      }
        else{ 
            setHeadline(res.data.Headline )
        }
    } catch (error) {
        console.log(error)
    }

}


    return (
        <div className="admin-container">
            <h1 className='admin-top'>Delte Post by ID</h1>
            <div className='admin-input-container ' > 
            <div>
            <input className='admin-input '  onChange = {(e) => {setId(e.target.value)}} />
            <button onClick={handleDeleteUser} className="admin-btn">Delete User</button>
            </div>
            <h1>Headline : {headline}</h1>
    
            </div>
        </div>
    )
}
