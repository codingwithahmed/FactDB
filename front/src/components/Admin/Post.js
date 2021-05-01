import React, {useState} from 'react'
import './User.css'
import axios from "axios"



export default function User() {
    const [text, setText] = useState('')
    const [headline, setHeadline] = useState('')
    const [id , setId ] = useState('')
    const [link,setLink] = useState('')
    const zas =  <div> <h1>Fuc asd k</h1> </div>

   const  handleFindPostLink = async () => {
    
        const res = await  axios.post(`/api/admin/findpost/link`,{
          link : link
        })

          try {
              if(res.data == null ){
                setId('Could not find any post ')
                setHeadline('Could not find any Post ')
            }
              else{ 
                  setHeadline(res.data.Headline)
                  setId(res.data._id)
                  setText(res.data.desc)
              }
          } catch (error) {
              console.log(error)
          }
    
    } 


    return (
        <div className="admin-container">
            <h1 className='admin-top'>Find Posts</h1>
            <div className='admin-input-container ' > 
            <div>
            <input className='admin-input '  onChange = {(e) => {setLink(e.target.value)}} />
            <button onClick={handleFindPostLink} className="admin-btn">Find By Link</button>
            </div>
             <br />

                       <h2>Headline : {headline}</h2>
          <h2>link : {link}</h2>
          <h2>Database ID : {id}</h2>
          <p>{text}</p>
            </div>
        </div>
    )
}
