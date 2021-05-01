import React from 'react'
import './MainDashBoard.css'
import MainContentDashBoard from './MainContentDashBoard'
import Search from './Search'
import Tweet from './Tweet'

import {Switch,Route} from 'react-router-dom'
import Help from './Help'
export default function MainDashBoard() {
    return (
        <div className="maindashboard" >

            <Switch>
            <Route path="/dashboard/tweet" component={Tweet} />
            <Route path = '/dashboard/search' component={Search} />
            <Route path='/dashboard/help' component={Help} />
            <Route path = '/' component={MainContentDashBoard} />
            </Switch>

        </div>
    )
}
