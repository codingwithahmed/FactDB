import React from 'react'
import './MainCard.css'
export default function MainCard({headline,para,src}) {
    return (
   <div className="main-card">
        <img src={src} alt="" />
        <div className="main-card-txt">
         <h2>{headline}</h2>
         <p>{para}
         </p>
        </div>
    </div>
    )
}
