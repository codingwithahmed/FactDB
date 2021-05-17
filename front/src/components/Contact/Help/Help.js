import React, {useState,useEffect} from 'react'
import './Help.css'
import axios from "axios"
import {ana} from '../../../firebaseconfig'


export default function Help() {

    const [header,setHeader] = useState('Support')
    const [text , setText] = useState('')
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')

    const HelpHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

            const {help} = await axios.post(
              '/api/api/admin/complain',
              {header:header , text:text,Email:email,Name:name},
              config
          ).then(() => {
           setTimeout("location.reload();",500);
          })

          
        } catch (error) {
            
        }
    }
    
    useEffect(() => {
        ana.logEvent("Help Viewed")
      })
    return (
        <div className="help">
            <h1 className="heading center">Hi! How can we help?</h1>
            <p className="subheading center">Have any questions? We’d love to hear from you.</p>
            <div className="box" style={{width:"70%",margin:"auto",marginBottom:"20px"}}>
                <div className='help-box-menu-right home-box-menu-active'>
                <p onClick = {(e) => setHeader('Support')} className=" help-box-text" >Support</p>
                </div>
                <div className='help-box-menu-right home-box-menu-active'>
                <p onClick={(e) =>setHeader('Legal Support') } className=" help-box-text"  >Investor</p>
                </div>
                <div className='help-box-menu-right home-box-menu-active'>
                <p onClick={(e) =>setHeader('Business Inquiry') } className=" help-box-text" >Business</p>
                </div>
                <div className='help-box-menu-right home-box-menu-active'>
                <p  onClick={(e) =>setHeader('Investor Relation') }  className="help-box-text">Support</p>
                </div>
<div className='help-box-menu-right home-box-menu-active'>
<p  onClick={(e) =>setHeader('Community Relation') }  className=" help-box-text">Community</p>

</div>
    </div>

    
        <input type="text" onSubmit ={(e) => e.target.value = '' } onChange = {(e) => {setName(e.target.value)}} className="name_input"  placeholder='Name' />
        <input type="email" onSubmit ={(e) => e.target.value = '' } onChange = {(e) => {setEmail(e.target.value)}} className="email_input" placeholder='Email' />
        
            <textarea onSubmit ={(e) => e.target.value = '' } onChange = {(e) => setText(e.target.value)} className="text_input">

            </textarea>
            
        <button type='submit' onClick={HelpHandler} className="btn" style={{margin:"auto",paddingRight:"35px",paddingLeft:"35px",marginTop:"20px"}}>Get Help</button> 

        </div>
    )
}
