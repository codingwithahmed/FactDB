import React,{useEffect} from 'react'
import As from'./assets/s.svg'
import './Business.css'
import Finance from './assets/Finance.svg'
import Followers from './assets/Followers.svg'
import {Link} from "react-router-dom"
import {ana} from '../../firebaseconfig'


const x = () => {
   return(
      <div className="business-down-row">
      <img src={As} className=" business-down-image" alt=""/>
      <div style={{marginLeft:"15px"}}>
      <h1 className="heading">Get a Seal of Trusts </h1>
         <p className="subheading">Get trust seal for your website. With trust seal user gets digital certificate and trust count for website, Which is digital score for your website which helps it in better ranking based on trustworthiness.</p>
     </div>
</div>
   )
}
export default function Business({index}) {
   useEffect(() => {
      ana.logEvent("Business Viewed")
    })
   
    return (
        <div className="business" >


            
       <h1 className="heading center">Use Case</h1>
 <p className="center subheading" style={{marginTop:"-20px"}}>Get factDb  for business and show people that they can trust you

</p>
  
  <div className="boxs" >
      <div className="box-row">
         <div className="box-col">
            <img src={Finance} className="business-row-img" alt=""/>
          <h3>factDb  Api</h3>
          <p>Integrate our fact check database with your product.</p>
         </div>
         <div className="box-col">
         <img src={Followers} className="business-row-img" alt=""/>

         <h3>Crowd sourced content moderation</h3>
         <p>Use our platform to make your content moderation method democratic and real.</p>
         </div>
      </div>
  </div>
  <div className='center'>
  <Link to="/help" style={{color:"white"}}> <button className='bs-btn' type="email">
     Contact US
     </button> </Link>
  </div>
        </div>
         
    )
}
