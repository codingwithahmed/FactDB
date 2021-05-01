import Button from '@material-ui/core/Button';
import React from 'react'
import './Contact.css'
import ContactCard from './ContactCard'
function Contact() {
    
    return (
        <div className="contact">
            <h1 className="contact-heading">Contact Us</h1>
            <h4 className="contact-subheading">Have any questions? We’d love to hear from you.</h4>
            <div className="search-main-bar">
         <input  className="search-main-bar-input" placeholder="Leave Here your Email or Message"/>
         </div>
         <div style={{margin:"auto",width:"fit-content",marginTop:"10px"}}>
         <Button variant="contained" color="primary" className="dashmainbtn">Send</Button>
         </div>
           <div className="contact-contactcard">
            <ContactCard color="#6DACF5" name="Submit"/>
            <ContactCard color="#4267B2" name = "Dispute"/>
            </div>
        </div>
    )
}

export default Contact
