import React from 'react'
import './MainDashBoard.css'
import MainContentDashBoard from './MainContentDashBoard'
import Submit from './Submit'
import Check from './Check'
import Setting from "./Setting"
import {Switch,Route} from 'react-router-dom'
import Help from './Help'
export default function MainDashBoard() {
    return (
        <div className="maindashboard" >

            <Switch>
            <Route path="/dashboard/check" component={Check} />
            <Route path = '/dashboard/submit' component={Submit} />
            <Route path='/dashboard/help' component={Help} />
            <Route path='/dashboard/setting' component={Setting} />
            <Route path = '/' component={MainContentDashBoard} />
            </Switch>

        </div>
    )
}
