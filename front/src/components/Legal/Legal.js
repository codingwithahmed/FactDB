import React from 'react'
import Sidebar from './Sidebar'
import './Legal.css'
import Privacy from './Privacy'
import Disclamer from './Disclamer'
import Returns from './Returns'
import {
    Switch,
    Route
  } from "react-router-dom";
import Termsofservice from './Termsofservice'
export default function Legal() {
    return (
        <div className="legal">
            <Sidebar />
            <hr style={{marginLeft:"25px"}}  />
            <div className="legal-main">
                <Switch >
                    <Route path="/legal/disclamer">
                        <Disclamer />
                    </Route>
                    <Route path="/legal/returns">
                         <Returns />
                    </Route>
                    <Route path="/legal/tof">
                        <Termsofservice />
                    </Route>
                    <Route path="/legal">
                      <Privacy />   
                    </Route> 
                 </Switch>       
            </div>
        </div>
    )
}
