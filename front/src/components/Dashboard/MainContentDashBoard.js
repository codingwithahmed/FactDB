import React,{useState,useEffect} from 'react'
import './MainContentDashBoard.css'
import {Row,Col} from 'react-bootstrap'
import {ComplainList} from './Check'
import axios from 'axios'

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
                  <div className="sphere">

</div>
                 <h2>{data.factcheck} FC</h2>
                 <p>You Have Check Facts</p>
                  </div>
                  
                  <div className="dashbox">
                      <div className="sphere">

                      </div>
                  <h2>{data.factsubmit} FS</h2>
                 <p>You Have Submitted Facts</p>
                  </div>
             </div>
            

            <div className='row'>
            
            <div className="dsahfullbox">

            </div>
                </div>

 </div>
           
 </div>

        </div>
    )
}
