import React from 'react'
import './Search.css'
import Button from '@material-ui/core/Button';

function SocialMedia({result}) {
    return (
        <div className="search">
            <h1 className="search-main-result">{result}True</h1>
         <div  className="search-main">
             <div className="search-main-bar">
         <input  className="search-main-bar-input" placeholder="Paste Link Here of the tweet"/>
         </div>
          
            <div style={{margin:"auto",width:"fit-content",marginTop:"10px"}}>
    <Button variant="contained" color="primary" className="dashmainbtn" >Search</Button>
</div>
            
         </div>
     
     <div className="search-post">
       
       <div className="search-post-upper">


        <div className="search-post-upper-text" >
           <h3 className="search-post-upper-text-heading">Headline</h3>
           <p className="search-post-upper-text-para" style={{}}>
           Social media is the new news outlet. It is the prime
source of news consumption and publication, problem 
we face is of it’s fact-checking and we at factify 
are working towards solving this
           </p>
        </div>

        <div className="search-post-upper-image" >
          <img  style={{}} src={{}} alt=""/>
        </div>

        </div>

        <div className="search-post-lowwer">
           <p className="search-post-upper-text-para">
           Social media is the new news outlet. It is the prime
source of news consumption and publication, problem 
we face is of it’s fact-checking and we at factify 
are working towards solving this           Social media is the new news outlet. It is the prime
source of news consumption and publication, problem 
we face is of it’s fact-checking and we at factify 
are working towards solving this
           </p>
        </div>

     </div>

        </div>
    )
}

export default SocialMedia
