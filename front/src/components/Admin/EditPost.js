import React, {useState,useEffect} from 'react'
import './User.css'
import axios from "axios"


export default function EditUser() {
    const [Headline, setHeadline] = useState('')
    const [Text, setText] = useState('')
    const[link,setlink] = useState('')
    const [sarcasm,setSarcam] = useState('')
    const [racsim,setracsim] = useState('')
    const [clickbait,setClick] = useState('')
    const [insult,setInsult] = useState('')
    const [valid,setValid] = useState('')
    const [id , setId ] = useState('')
    const [item,setItem] = useState()
    const [inp , setInput] = useState('')
    
const handleEditPost = async () => {
   
    const res = await axios.put(`/api/api/admin/updatepost` , {
        Headline : Headline,
        Text : Text,
        link : link,
        Clickbait:clickbait,
        IsInsult:insult,
        Result:valid,
        Sarcasm:sarcasm,
        Racsim:racsim
    })

    try {
        if(res.data == null ){
          setHeadline('Could not find any post by this Link ')
      }
        else{ 
            setInput(res.data.desc)             
            setHeadline(res.data.Headline)
            setId(res.data._id)
            setItem(zas)
            console.log(res.data)

            try{
                setTimeout("location.reload()",3000)
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
 <button  className="admin-btn">Headline</button>
 <input className='admin-input '  onChange = {(e) => {setHeadline(e.target.value)}} />
 </div>
 <br />
 <div>
 <input className='admin-input '  onChange = {(e) => {setText(e.target.value)}} />
 <button  className="admin-btn">Text</button>
 </div>

 <br />
 <div>
 <button  className="admin-btn">Clickbait</button>
 <input  className='admin-input '  onChange = {(e) => {setClick(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Sarcasm</button>
 <input  className='admin-input '  onChange = {(e) => {setSarcam(e.target.value)}} />
 </div>
 <br />
 <div>
 <button  className="admin-btn">Racism</button>
 <input  className='admin-input '  onChange = {(e) => {setracsim(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Insult</button>
 <input  className='admin-input '  onChange = {(e) => {setInsult(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Validaty</button>
 <input  className='admin-input '  onChange = {(e) => {setValid(e.target.value)}} />
 </div>
 <br />

 <button onClick={handleEditPost} className="admin-btn admin-done">Done</button>
</>
 
    return (
        <div className="admin-container">
            <h1 className='admin-top'>Edit Post</h1>
            <div className='admin-input-container ' > 
           
         
            <div>
             <input className='admin-input '  onChange = {(e) => {setlink(e.target.value)}} />
             <button  className="admin-btn">Link</button>
              </div>
        <br />
          {zas}
          
          <h1>Headline : {Headline}</h1>
          <p>Text : {inp}</p>
          <h2>Database ID : {id}</h2>
          
            </div>
        </div>
    )
}
