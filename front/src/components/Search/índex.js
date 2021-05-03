import React,{useState} from 'react'
import './index.css'
import axios from "axios"
export default function Index() {
    const [desc,setDesc] = useState('');
    const [link,setLink] = useState('');
    const [Remarks,setRemarks] = useState([]);
    const [comment,setComment] = useState([]);

    const search = () => {
          axios.post('/api/search',{
              link:link
          }).then((fact) => {
              setDesc(fact.data.desc)
              console.log(fact)
              setRemarks(fact.data.feedback)
              setComment(fact.data.Comment)
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
            <h2>Desc : {desc} </h2>
            <h2>Remarks : {Occurence(Remarks)} </h2>
            <h2>comments </h2>
            <ul>
            {comment.map(com => <li>{com}</li>)}
            </ul>
        </div>
    )
}
