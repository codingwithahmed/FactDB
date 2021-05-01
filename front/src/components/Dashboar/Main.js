import React from 'react'
import MainCard from './MainCard'
import SAP from './assets/about.svg'
import Button from '@material-ui/core/Button';
import './Main.css'
import MainHotTopic from './MainHotTopic'
export default function Main() {

    return (
        <div className="main">
            <div className="main-right-col">
                <div className="main-right-col-top">
                   <h1>Factify</h1>
                   <h1>Dashboard</h1>
                   <p>History</p>
                </div>
                 <MainCard src={SAP} 
                 headline="Lorem Ipsum"
                 para="Sca leta yah ks ksfo pos nsdfj oip okas kopp.
                 lop asdo popa sdaod" />
                <MainCard src={SAP} 
                 headline="Lorem Ipsum"
                 para="Sca leta yah ks ksfo pos nsdfj oip okas kopp.
                 lop asdo popa sdaod" />
                <MainCard src={SAP} 
                 headline="Lorem Ipsum"
                 para="Sca leta yah ks ksfo pos nsdfj oip okas kopp.
                 lop asdo popa sdaod" />
                 <div style={{margin:"auto",width:"fit-content",marginTop:"10px"}}>
<Button variant="contained" color="primary" className="dashmainbtn">   Clear    </Button>
</div>
            </div>

            <div className="main-left-col">
                <div className="main-left-col-row">
               <MainHotTopic Date="21, mArch"
                src={SAP} headline="Lorem Ipsum"
                para="Sca leta yah ks ksfo pos nsdfj oip okas kopp.
                lop asdo popa sdaod"  />
                <MainHotTopic Date="21, mArch"
                src={SAP} headline="Lorem Ipsum"
                para="Sca leta yah ks ksfo pos nsdfj oip okas kopp.
                lop asdo popa sdaod"  />
                </div>
                <div className="main-left-col-adver" >
                    <h1 className="main-left-col-adver-heading" >Everyone is a Journalist</h1>
                    <p className="main-left-col-adver-para" >“ Social media is the new news outlet. It is the prime
source of news consumption and publication, problem 
we face is of it’s fact-checking and we at factify 
are working towards solving this ”</p>
<br />
<div style={{margin:"auto",width:"fit-content",marginTop:"10px"}}>
    <Button variant="contained" color="primary" className="dashmainbtn" >Add Browser Extension it's free</Button>
</div>
                </div>
            </div>
            
        </div>
    )
}
