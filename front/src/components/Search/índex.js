import React ,{useState,useEffect} from 'react'
import './index.css'
import axios from "axios"
import SearchRounded from '@material-ui/icons/SearchRounded'

export default function Index() {
    const [desc,setDesc] = useState('');
    const [link,setLink] = useState('');
    const [Remarks,setRemarks] = useState([]);
    const [comment,setComment] = useState([]);

    const search = () => {
          axios.post('/api/api/search',{
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


            <Submit />
        </div>
    )
}

 function Submit() {
 
    const [link,setLink] = useState(null)
    const [para, setPara] = useState(null)
    const [language,setLanguage] = useState("English")
    const handleSearch= async (e) => {
         console.log('sad')

         const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
          console.log('sad')
            setLanguage('English')
            if (link.split("/")[1] === 'https://bit.ly/'){
              setPara("Sorry Dont Eneter Bit.ly link")
              
            }
            else {
        try {
            if(!link){
                console.log('sadda')
              setPara(null)
              setLink(null)
              setLanguage(null)
            }
          const {twee} = await axios.post(
              '/api/api/submitfact',
              {link:link,
                desc:para,
                language:language,
                username:localStorage.getItem("email")},
              config
          ).then((post) => {
              setPara(post.data.desc)
              setLink(post.data.desc)
              setLanguage(post.data.desc)
          })
            }
         catch (error) {
            return console.log('fas')
        }
    }
  }
    return (
        <div className="search">
            <div className="searchSpace center"  >
                <h1 style={{padding:"15px"}}>Submit </h1>
                <p>Enter fact To Earn fact Coins</p>
                
            </div>
            
             <form onSubmit={handleSearch} style={{margin:"auto",width:"fit-content"}}>
            <div className="Searchsearchbox" style={{margin:"15px"}}>
                 <SearchRounded fontSize="large" className=""/>
                  <input placeholder="Enter Link to check" className="" onChange= {(e) => setLink(e.target.value)} />
            </div>
            <div className="Searchsearchbox" style={{margin:"15px"}}>
                  <textarea placeholder="Give one Line Introduction" className="Searchtextarea" onChange= {(e) => setPara(e.target.value)} />
            </div>
         
            <div style={{margin:"15px"}}>
              <div className='dashoption'>
                <div>   <select id="language" name="language" onChange= {(e) => setLanguage(e.target.value)}>
    <option value="English">English</option>
    <option value="Arabic">Arabic</option>
    <option value="French">French</option>
    <option value="Chinese">Chinese</option>
  </select></div>
            <div>
            <button className="btn-outline" >Submit</button>  
            </div>

              </div>

            </div>
            </form>
            <div className="SearchContent">
            <div>
                 
                </div>
           

            </div>
        </div>
    )
}
