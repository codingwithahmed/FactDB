import React from 'react'
import Button from '@material-ui/core/Button';
import './ContactCard.css'

export default function ContactCard({color,name}) {
    
    return (
        <div className="contact-card">
            <div className="contact-card-top" style={{backgroundColor:`${color}`}}></div>
            <div className="contact-card-center">
            <h1  className="contact-card-center-heading" style={{color:`${color}`}}>{name}</h1>
            <p className="contact-card-center-para">Are you interested in our
latest news or working on
a  story and
need to get
in touch?</p>
            </div>
            <div className="contact-card-bottom" style={{margin:"auto",width:"fit-content",marginTop:"10px"}}>
<Button variant="outlined" color="#6DACF5" className="dashmainbtn" style={{borderColor:`${color}`,color:`${color}`}}>   Vist {name}    </Button>
            </div>
        </div>
    )
}
