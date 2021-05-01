import React, { Component } from 'react'
import './HowitWorks.css'
import Logo from './assets/logo.svg'
import ExtensionStep1 from './assets/ExtensionStep1.svg'
import ExtensionStep2 from './assets/ExtensionStep2.svg'
import ExtensionStep3 from './assets/ExtensionStep3.svg'
import {Link,Route,Switch} from 'react-router-dom'
import SearchBar from './assets/search.svg'
import Factify from './assets/Factify.svg'
import Blogs from './assets/Socialmed.svg'

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
        <div className='rect-col'>
        <img src={props.src} className="rect-col-img" alt="" />
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
               
               <Switch >

                   <Route path="/how-it-work-1">

                <Rectangle 
                Step3desc="Works instantly and fact-checks information"
                 Step2desc=" Paste information in factify search bar"
                  Step1desc=" Copy what you want to fact-check"
                  head1="Copy information"
                  head3="Result"
                  head2="Paste information"
                  Step1={ExtensionStep1}
                  Step2={ExtensionStep2}
                  Step3={ExtensionStep3}
                  />
                     </Route>


                     <Route path="/how-it-work-2">

<Rectangle 
head1="Sign-up with social media"
head2="Surf like usual"
head3="Result"
Step3desc="Works instantly and fact-checks information 
"
 Step2desc="we will be your fact-checking companion, As you
 surf the website. "
  Step1desc="- Sign-up with your social media
  accounts "
  Step1={ExtensionStep1}
  Step2={ExtensionStep2}
  Step3={ExtensionStep3}
  />
     </Route>


     <Route path="/">


    

     <Rectangle 
Step3desc="Add browser extension with few clicks"
 Step2desc="we will be your fact-checking companion, surf
 any website as usual.
 "
  Step1desc="Add browser extension with few clicks"
  head1="Add browser extension"
  head2="surf like usual"
  head3="Result"
  Step1={ExtensionStep1}
  Step2={ExtensionStep2}
  Step3={ExtensionStep3}
  />
     </Route>

               </Switch>

            </div>
            
            </div>
        )
    }
}
