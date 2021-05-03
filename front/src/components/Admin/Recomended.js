import React, {useState} from 'react'
import './User.css'
import axios from "axios"


export default function EditRecomendation() {
    const [Headline, setHeadline] = useState('')
    const [Text, setText] = useState('')
    const[link,setlink] = useState('')
    const [Headline2, setHeadline2] = useState('')
    const [Text2, setText2] = useState('')
    const[link2,setlink2] = useState('')
    
    
const handleEditPost = async () => {
   
    const res = await axios.put(`/api/api/admin/recomend` , {
        Text : Text,
        link : link,
        link2:link2,
        id:"a2szse"
    })

    try {
        if(res.data == null ){
          setHeadline('Could not find any post by this Link ')
      }
        else{ 
            setText(res.data.desc)    
            setText2(res.data.desc2)                      
            setHeadline(res.data.Headline)
            setHeadline2(res.data.Headline2)
            console.log(res.data)

            try{
                setTimeout("location.reload()",5000)
            }
            catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }

}

const zas =   <>

 <div>
 <button  className="admin-btn">Link</button>
 <input  className='admin-input '  onChange = {(e) => {setlink(e.target.value)}} />
 </div>
 <br />


 <div>
 <button  className="admin-btn">Link 2</button>
 <input  className='admin-input '  onChange = {(e) => {setlink2(e.target.value)}} />
 </div>
 <br />

 <button onClick={handleEditPost} className="admin-btn admin-done">Done</button>
</>
 
    return (
        <div className="admin-container">
            <h1 className='admin-top'>Recomendation</h1>
            <div className='admin-input-container ' > 

          {zas}
          
          
          <h2>Link1 : {link}</h2>
          <h2>Link2 : {link2}</h2>
       
            </div>
        </div>
    )
}
