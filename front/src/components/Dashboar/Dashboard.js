import React from 'react'
import { Route , Switch} from 'react-router-dom'
import SideMenu from './SideMenu'
import Main from './Main'
import './Dashboard.css'
import Search from './Search'
import Contact from './Contact'
import Tweets from './SocialMedia'
function Dashboad() {
    
    return (
        <div className="dashboard">
            <SideMenu />
            <Switch>
            <Route path="/dashboard/contact">
                  <Contact />
                </Route>
                <Route path="/dashboard/search">
                  <Search />
                </Route>
                <Route path="/dashboard/tweets">
                  <Tweets />
                </Route>
                <Route path="/" >
                   <Main />
                </Route>
            </Switch>
        </div>
    )
}

export default Dashboard
