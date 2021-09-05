import React from 'react'
import './MainHotTopic.css'
export default function MainHotTopic({Date,src,headline,para}) {
    return (
        <div className="mainhottopic"> 
            <h2 className="mainhottopic-date">{Date}</h2>
            <p className="mainhottopic-hottopic">Hot Topic</p>
              <div className="mainarea">
                <img className="mainhottopic-img" src={src} alt={headline}/>
                <div className="mainhottopic-text">
                    <h2 className="mainhottopic-headline">{headline}</h2>
                    <p className="mainhottopic-para">{para}</p>
                </div>
                </div>
            
        </div>
    )
}
