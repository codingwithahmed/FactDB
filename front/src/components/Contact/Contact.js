import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
export default function Contact() {
    return (
        <div className="contact"> 
             <h1 className="heading center">Contact Us</h1>
             <p className="subheading center">Have any questions? We’d love to hear from you.</p>
             <div className="row">
                   <div >
                    <div className="card">
                        <div className="cut"></div>
                        <div style={{padding:"20px", height:"350px"}}>
                        <h1 className="center ">Submit</h1>
                        <p className="desc">Are you interested in our<br />
                        latest news or working on<br />
                        a  story and<br />
                        need to get
                        in touch?</p>
                        <button className="btn-outline white subheading"><Link to="/submit">Vist Submit</Link></button>
                        </div>
                   </div>
                   </div>
                   
                   <div className="card card-main">
                        <div className="cut"></div>
                        <div style={{padding:"45px"}}>
                        <h1 className=" center">Help & Support</h1>
                        <p className="desc ">Our support team is <br />
                        spread across the globe to <br />
                        give you answers fast.</p>
                        <button className="btn subheading white" subheading> <Link to="/help">Vist Help</Link></button>
                        <p className="desc">Submit A Request</p>
                        </div>
                   </div>
                   <div> 
                   <div className="card">
                        <div className="cut"></div>
                        <div style={{padding:"20px", height:"350px"}}>
                        <h1 className="center">Dispute </h1>
                        <p className="desc">Are you interested in our<br />
                        latest news or working on<br />
                        a  story and<br />
                        need to get
                        in touch?</p>
                        <button className="btn-outline subheading white"> <Link to="/dispute">  Vist Submit </Link></button> 
                        </div>
                   </div>
                   </div>
             </div>
        </div>
    )
}
