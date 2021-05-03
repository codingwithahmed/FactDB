import React,{useEffect} from 'react'
import Amand from './assets/Amd.png'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import HowitWorks from './HowitWorks'
import {Link} from 'react-router-dom'
import {ana} from '../../firebaseconfig'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin:"auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));





export default function Home() {
  useEffect(() => {
    ana.logEvent("Home Viewed")
  })


  const classes = useStyles();

    return (
        <div className="home">
          <div className="row">
           <div className="">
              <h1 className="heading"> Crowd sourced<br />
fact-checking platform. </h1>
              <h3 className="subheading">Report misinformation, disinformation <br />
and fake news online and earn FactCoin.<br />
Let’s build safer digital world together.</h3>
<button className="btn-outline">
  <Link to='/login' className="btn-link"> Sign up</Link>
</button>

           </div>

           <div className="col">
           <img src={Amand} alt="" className="img" style={{width:"350px"}}/>
           </div>
           </div>


             
             <h1 className="heading center">How FactDB work</h1>

    

<HowitWorks />
   



<h2 className="heading center">Earn while doing the right thing</h2>


<div style={{margin:"auto",width:"fit-content"}}>
<button className="btn " style={{paddingRight:"35px",paddingLeft:"35px"}}><Link to="/tryit" style={{color:"white"}}> Try our Ai Analyzer <small>it's free </small></Link> </button>
</div>

        </div>
    )
}
  