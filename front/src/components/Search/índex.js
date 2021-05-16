import React ,{useState,useEffect} from 'react'
import './index.css'
import axios from "axios"
import SearchRounded from '@material-ui/icons/SearchRounded'
/*
   <h2>Desc : {desc} </h2>
            <h2>Remarks : {Occurence(Remarks)} </h2>
            <h2>comments </h2>
            <ul>
            {comment.map(com => <li>{com}</li>)}
            </ul>
*/ 
export default function Index() {
    const [data,setData] = useState([]);
    const [link,setLink] = useState('');


    const search = () => {
          axios.post('/api/api/search',{
              link:link.trim()
          }).then((fact) => {
              setData(fact.data)
              console.log(fact)
              
          })
    }

    function Occurence(arr){
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }


    return (
        <div className="search">
            <div className='search-input'>
                <input type='search' placeholder='Paste a link to search' onChange={(e) => setLink(e.target.value) } />
            </div>
            <div className='search-btn-container'>
            <button className='search-btn' onClick={search}>Search</button>
            </div>

            <table>
                {data.map((fact) => <tr>
                      <td>{fact.feedback.map((i) => <li>{i}</li>)}</td>
                     <td>{fact.Comment.map((i) => <li>{i}</li>)}</td>
                     <td>{fact.link}</td>
                </tr>)}
            </table>

        </div>
    )
}

