import React,{useState} from 'react'
import './Submit.css'
import axios from "axios"
import Tick from '../assets/check.svg'
export default function Submit() {

    const [header , setHeader] = useState('Submit')
    const [text , setText] = useState('')
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')

    const handleSubmit = () => {
        axios.post('api/admin/info',{
            Headers:header,
            Text : text,
            Email:email,
            Name:name
        }).then(() => {
            setTimeout("location.href = 'http://localhost:3000';",500);
           })
        
    }

    return (
        <div className="submit">
            <h1 className="heading center">Submit Information Here</h1>
            <p className="subheading center">Have somthing to share? We’d love to hear from you.</p>
            <div className="input">
        <input type="text" onChange = {(e) => {setName(e.target.value)}} className="name_input"  placeholder='Name' />
        <input type="email" onChange = {(e) => {setEmail(e.target.value)}} className="email_input" placeholder='Email' />
        </div>
            <textarea className="text_input" onChange = {(e) => {setText(e.target.value)}}>

            </textarea>
            <div className="submit-row" style={{width:"fit-content",margin:"auto"}}>
                 <img src={Tick} style={{width:"20px",marginRight:"5px"}}  alt=""/>
                 <p >By Submiting on Inforamtion you agree to our terms and condition</p>
            </div> 
            <button className="btn" onClick = {handleSubmit} style={{margin:"auto",paddingRight:"35px",paddingLeft:"35px"}}>Submit</button>
        </div>
    )
}
