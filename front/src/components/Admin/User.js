import React, {useState} from 'react'
import './User.css'
import axios from "axios"



export default function User() {
    const [email, setEmai] = useState('')
    const [username, setUsername] = useState('')
    const[inp,setInput] = useState('')
    const [id , setId ] = useState('')
    const zas =  <div> <h1>Fuc asd k</h1> </div>

   const  handleFindUser = async () => {
    
        const res = await  axios.get(`/api/admin/finduser/${email}`)

          try {
              if(res.data == null ){
                setInput('Could not find any user by this Email ')             
                setId('Could not find any user by this id ')
                setUsername('Could not find any user by this Username ')
            }
              else{ 
                  setInput(res.data.email)             
                  setUsername(res.data.username)
                  setId(res.data._id)
              }
          } catch (error) {
              console.log(error)
          }
    
    } 
    return (
        <div className="admin-container">
            <h1 className='admin-top'>Find User by email</h1>
            <div className='admin-input-container ' > 
            <div>
            <input className='admin-input '  onChange = {(e) => {setEmai(e.target.value)}} />
            <button onClick={handleFindUser} className="admin-btn">Find User</button>
            </div>
                       <h2>Username : {username}</h2>
          <h2>Email : {inp}</h2>
          <h2>Database ID : {id}</h2>
            </div>
        </div>
    )
}
