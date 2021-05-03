import React,{useState,useEffect} from 'react'
import './MainContentDashBoard.css'
import {Row,Col} from 'react-bootstrap'
import {ComplainList} from './Check'
import axios from 'axios'

export default function MainContentDashBoard() {

    const [language,setLanguage] = useState('English')
    const [factcoin, setFactcoin] = useState('')
    const [loader , setLoader] = useState("")
    useEffect(() => {
        
    const getFact = async () =>  {
        axios.post("/api/api/check/factcoin" , {email:localStorage.getItem("email")}).then((fact) => {
          setFactcoin(fact.data.factcoin)
        })
            
    }
    getFact()
    }, [])
    return (
        <div className="MainContentDashBoard" >

<div className='MainContentDashBoard-top-row' >
    <div>
      <h1> FactDB</h1>
    </div>
    <div>
      <form>
         <select id="language" name="language" className='checkerlang' onChange= {(e) => setLanguage(e.target.value) } >
<option value="English">English</option>
<option value="Arabic">Arabic</option>
<option value="French">French</option>
<option value="Chinese">Chinese</option>
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
             <div className="row">
                  <div className="dashbox">
                  <div className="sphere">

</div>
                 <h2>{factcoin}.00 FC</h2>
                 <p>You Have Earned Fact Coin</p>
                  </div>
                  
                  <div className="dashbox">
                      <div className="sphere">

                      </div>
                  <h2>23.00 FC</h2>
                 <p>Total Number of Fact Coin</p>
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
