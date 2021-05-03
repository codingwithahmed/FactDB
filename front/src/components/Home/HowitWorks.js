import React, { Component } from 'react'
import './HowitWorks.css'
import Logo from './assets/logo.svg'
import Illustraion3 from "./assets/Illustration 3.jpeg"
import Illustraion from "./assets/Ilustaration 2.jpeg"
import Illustraion2 from "./assets/Illustration.jpeg"
function Box() {
 return(
     <div className="how-it-works-right-box">
         
         <div className="how-it-works-right-box-bottom">
         <img src={Logo} alt="" className="how-it-works-right-box-logo"/>
        <h2 className="how-it-works-right-box-heading" >FactDB</h2>
         <p className="how-it-works-right-box-text">Crowd sourced
fact-checking platform.
Report misinformation, disinformation
and fake news online and earn FactCoin.
Let’s build safer digital world together. </p>
</div>

     </div>
 )
}


const Step = (props) => {
    return(
        <div className='rect-col' >
        <img src={props.src} className="rect-col-img" alt="" style={{marginBottom:"25px"}}/>
        <h3 className="rect-col-step">{props.step}</h3>
        <p className="rect-col-desc">{props.desc}</p>
     </div>
    )
}


function Rectangle(props){
    
    
    return(
        <div className="rectangle" >
            <div className="rect-row">
             <Step 
            step={props.head1}
            src={props.Step1}
            desc= {props.Step1desc} />
             <Step
              step={props.head2}
            src={props.Step2}
             desc= {props.Step2desc} />
             <Step
              step={props.head3}
               src={props.Step3}
                desc= {props.Step3desc} />
              </div>
        </div>
    )
}

export default class HowitWorks extends Component {


   

    render() {
        return (
            <div>
            <div className="howitworks">
                <Box />
               


    

     <Rectangle 
Step3desc="Withdraw your earning"
 Step2desc="Start To Check Facts 
 "
  Step1desc="Register to factDb to start"
  head1="Register"
  head2="Check Fact"
  head3="Earn"
  Step1={Illustraion}
  Step2={Illustraion2}
  Step3={Illustraion3}
  />

            </div>
            
            </div>
        )
    }
}
