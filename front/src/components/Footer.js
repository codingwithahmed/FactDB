import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <hr className="hr" />
            <div className="footer_links">
             <Link to="/help" className="footer_link"><p className="footer_link">Contact</p></Link>
             <Link to="/Legal" className="footer_link"> <p className="footer_link">Legal</p></Link>
             <p className="footer_link">@copyright 2021 <a href="https://www.factdb.net">factdb.net</a></p>
             <Link to="/business" className="footer_link"> <p className="footer_link">Business</p></Link>
             <Link to="/trysearch" className="footer_link">  <p className="footer_link">Search </p></Link>
            </div>
        </div>
    )
}
