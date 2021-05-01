import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import './Help.css'
import Button from '@material-ui/core/Button/Button'

export default function Help() {
    
    const [header,setHeader] = useState('Support')
    const [text , setText] = useState('')
    const HelpHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

            const {help} = await axios.post(
              '/api/admin/complain',
              {header:header , text:text},
              config
          )

          
        } catch (error) {
            
        }
    }
    return (
        <div className="help">
            <h2>Help</h2>
            <p>Have any questions? We’d love to hear from you.</p>

            <ul>
                <li><Button  onClick={(e) =>setHeader('Support') }>Support</Button></li>
                <li><Button onClick={(e) =>setHeader('Legal Support') }>Legal Support</Button></li>
                <li><Button onClick={(e) =>setHeader('Business Inquiry') }>Business Inquiry</Button></li>
                <li><Button onClick={(e) =>setHeader('Investor Relation') }>Investor Relation</Button></li>
            </ul>

            <textarea className="text_input" onChange = {(e) => setText(e.target.value)}>

            </textarea>
            <div className="Get-help">
              <Button variant="contained" color="primary" onClick={HelpHandler}>Get Help</Button>
            </div>
        </div>
    )
}
