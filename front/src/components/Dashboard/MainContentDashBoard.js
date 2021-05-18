import React,{useState,useEffect} from 'react'
import './MainContentDashBoard.css'
import EmailOpen from "./assets/emailopen.png"
import EmailClose from "./assets/emailclose.png"
import ComplainList from './Check'
import axios from 'axios'
import {Link} from "react-router-dom"

export default function MainContentDashBoard() {

    const [language,setLanguage] = useState('English')
    const [data, setData] = useState([])
    const [loader , setLoader] = useState("")
    useEffect(() => {
        
    const getFact = async () =>  {
        axios.post("/api/api/check/factcoin" , {email:localStorage.getItem("email")}).then((fact) => {
            setData(fact.data)
            console.log(fact.data)
            localStorage.setItem("username",fact.data.username)
        })
            
    }
    getFact()
    }, [])
    return (
        <div >

<div className='MainContentDashBoard-top-row' >
    <div>
      <h1> FactDB</h1>
    </div>
    <div>
      <form >
         <select id="language" name="language" className='checkerlang' onChange= {(e) => setLanguage(e.target.value) } >
<option value="English">English</option>
<option value="Arabic">Arabic</option>
<option value="French">French</option>
<option value="Chinese">Chinese</option>
<option value="Hindi">Hindi</option>
<option value="Spanish ">Spanish </option>

</select>
</form>
</div>
    </div>
    <h3>Check Fact</h3>

           <div className="row">

 <div className='row'>
<ComplainList  language={language} />
            </div>

            <div className='col'>
             <div className="row" style={{margin:"auto"}}>
                  <div className="dashbox">
                  <img className="sphere" src={EmailClose} alt="EmailClose" />

                 <h2>{data.factcheck} FC</h2>
                 <p>You Have Check Facts</p>
                  </div>
                  
                  <div className="dashbox">
                  <img className="sphere" src={EmailOpen} alt="EmailOpen" />

                  <h2>{data.factsubmit} FS</h2>
                 <p>You Have Submitted Facts</p>
                  </div>
             </div>
            

            <div className='row'>
            
            <div className="dsahfullbox">
                <h1>Guidelines</h1>
              <div>
              <h2>Search result are crowd-sourced and based on individual opinions. If you do not find news link you searched, We recommend you to Sign-up and submit link for result.
              </h2>
              <div style={{margin:"auto",width:"fit-content"}}>
<button className="btn " style={{paddingRight:"35px",paddingLeft:"35px"}}><Link to="/trysearch" style={{color:"white"}}> Try Database Search </Link> </button>
</div>
              </div>
             

              <div>
              <h2>AI fact-checker is trained on static data. We do not stand by it’s rating. While
we will continue to work on building it. Accuracy will continue to increase as
we have more user generated data to train our models. Thank You </h2>
<div style={{margin:"auto",width:"fit-content"}}>
<button className="btn " style={{paddingRight:"35px",paddingLeft:"35px"}}><Link to="/tryit" style={{color:"white"}}> Try AI fact-checker </Link> </button>
</div>

              </div>

         
            </div>
                </div>

 </div>
           
 </div>

        </div>
    )
}
