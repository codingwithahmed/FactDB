import React,{useState,useEffect} from 'react'
import './MainContentDashBoard.css'
import {Row,Col} from 'react-bootstrap'
import {ComplainList} from './Tweet'
import axios from 'axios'

  
function MainContentDashBoardcard (props) {

    return(
        <div className={props.class}>
       

           <div className="MainContentDashBoardcard-info">
               <div className="MainContentDashBoardcard-text">
               <h4 className="MainContentDashBoardcard-headline">{props.headline}</h4>
               <p className="MainContentDashBoardcard-desc">{props.shortdesc}</p>
               </div>
           </div>

           <div>
               <p>Take to the page</p>
           </div>
        </div>
    )
}


function Histroy (props) {

    return (
     <Row>
         <Col>
         <MainContentDashBoardcard
            shortdesc={props.shortdesc1}
            headline={props.headline1} veiws={'145M'}  class=" histtab"/>

         </Col>
         
         <Col>
         <MainContentDashBoardcard
             shortdesc={props.shortdesc2}
             headline={props.headline2} veiws={'145M'}  class=" histtab"/>
 
         </Col>
     </Row>
    );
}


export default function MainContentDashBoard() {

    const [language,setLanguage] = useState('English')
    const [factcoin, setFactcoin] = useState('')

    useEffect(() => {
        
    const getFact = async () =>  {
        axios.post("api/check/factcoin" , {email:localStorage.getItem("email")}).then((fact) => {
          setFactcoin(fact.data.factcoin)
        })
            
    }
    getFact()
    }, [])
    return (
        <div className="MainContentDashBoard" style={{margin:"auto",width:"fit-content"}}>

<div className='row' style={{padding:"15px",minWidth:"850px"}}>
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

           <div className="Histroy">

 <div className='MainContentDashBoardrow'>
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
            

            <div className='MainContentDashBoardrow'>
            
            <div className="dsahfullbox">

            </div>
                </div>

 </div>
           
 </div>

        </div>
    )
}
