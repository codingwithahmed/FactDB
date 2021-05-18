
/*
import React ,{useState,useEffect} from 'react'
import SearchRounded from '@material-ui/icons/SearchRounded'
import axios from "axios"
import './Search.css'
export default function Tweet() {
    const [tweet,settweet] = useState('')
    const [result,setresult] = useState('')
    const [sarcasm,setSarcasm] = useState('')
    const [Racsim,setRacsim] = useState('')
    const [IsInsult,setIsInsult] = useState('')
    const [Clickbait,setClickbait] = useState('')
    const [heder , setHeader ] = useState('')
    const handleTweet = async (e) => {

        e.preventDefault();
         console.log('sad')

         const config = {
            header: {
              "Content-Type": "application/json",
            },
          };

        try {
            if(!tweet){
              setClickbait(null)
              setIsInsult(null)
              setRacsim(null)
              setSarcasm(null)
              setresult(null)
            }
          const {twee} = await axios.post(
              '/api/post/tweet',
              {link:tweet},
              config
          ).then((post) => {
              setHeader(post.data.Headline)
              setClickbait(post.data.Clickbait)
              setIsInsult(post.data.IsInsult)
              setRacsim(post.data.Racsim)
              setSarcasm(post.data.Sarcasm)
              setresult(post.data.Result)
          })

            }

         catch (error) {
            return console.log(error)
        }
    }

    return (
        <div className="search">
            <div className="searchSpace center"  >
                <h1 style={{padding:"15px"}}>Check Tweets</h1>
                <p>Paste any Tweets link and get result</p>
            </div>
            <form onSubmit={handleTweet}>
            <div className="Searchsearchbox">
                 <SearchRounded fontSize="large" className=""/>
                  <input placeholder="Enter Tweet to check Facts" className="" onChange= {(e) => settweet(e.target.value)} />
                  <button className="btn-outline" o>Check</button>  
            </div>
            </form>
            
            <div className="SearchContent">
            <div>
              
                  <h1> Sarcasm : {sarcasm} </h1>
                  <h1> ClickBait : {Clickbait} </h1>
                  <h1> Racsim : {Racsim} </h1>
                  <h1> Result : {result} </h1>
                  <h1> Insult : {IsInsult } </h1>
                  
                </div>
                <p>{heder}</p>
                
            </div>
        </div>
    )
}
*/
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Check.css'
import {user,email} from "../../Data"



const Card = (props) => {
const [comment,setComment] = useState('');
const [feedback,setFeedback] = useState('Agree');
const [link,setLink] = useState(props.link)
const [desc,setDesc] = useState(props.desc)

const [test,setTest] = useState("")

  const  handleSubmit =  async (e) => {
    await axios.put('/api/api/check/check',{
      link:link,
      Comment:comment,
      feedback:feedback,
      desc:desc,
      user:email,
      username:user
    });
  }

 

  async function handleCheck(e) {
    e.preventDefault() 
     try {
      axios.put('/api/api/check',{  
         link:link,
        Comment:comment, 
        feedback:feedback,
        desc:desc,
        user:email,
        username:user
       }).then(x =>  setTimeout("location.reload()",1000))
     
     } catch (error) {
       console.log(error)
     }
  }
    return(
      <form  className='check-contaier'  onSubmit={e => handleCheck(e)} >
      <div className='row'>  
        <div><h3>@{props.username}</h3></div>
        <h1>{props.index}</h1>
         <select id="Agree" name="Agree" required  className='checkerlang' onChange={(e) => setFeedback(e.target.value)} defaultValue="True" >
<option value="Propoganda">Propoganda</option>
<option value="True">True</option>
<option value="False">False</option>
<option value="Misinformation">Misinformation</option>
<option value="Disinformation">Disinformation</option>
<option value="Hate Speech">Hate Speech</option>
</select></div>
     <p style={{width:"90%",margin:"auto",overflow:"hidden",margin:"15px"}}>{props.desc}</p>
     <a href={props.link}style={{width:"90%",margin:"auto",overflow:"hidden",margin:"15px",color:"blue"}}>{link}</a>
     <div className="checker-col">
          <button  className='btn btn-checker' type='submit'>Submit</button>

     <textarea className='checker-input' placeholder="add comment" onChange={(e) => { setComment(e.target.value) } }  required/>
       </div>
       {test}
     </form>
    )
}





export default function Index (props) {
  const [facts,setFacts] = useState([])

  useEffect(() => {

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;  
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    const fetchData = async () => {
      axios.get(`/api/api/submitfact`)
      .then(res => {
        const facts = res.data;
        let self = this
        setFacts(facts)
      });
    }

    fetchData()
  },[])
  return(
    <div className="checker">
      {
          facts.filter(fact => fact.language === props.language  & !fact.users.includes(props.email)).reverse().map((fact,index) =><Card desc={fact.desc} link={fact.link} username={fact.username} /> )
      }
    </div>
  )
}




/*
export default  function Tweet() {
  const [language,setLanguage] = useState('English')
  const [start,setStart] = useState([])
  const [end,setEnd] = useState([])
  const fetchData = async () => {
    const result = await axios.get(`/api/api/submitfact`)
    await setEnd(result.data.reverse().splice(Math.floor(result.data.length/2),result.data.length))
    await setStart(result.data.reverse().splice(0,Math.floor(result.data.length/2)))
  };

  useEffect( () => {
    fetchData()
  })

  return(
    <div >
               <div className='row'>
    <div>
      <h1> FactDB</h1>
    </div>
    <div>
    <form>
         <select id="language" name="language" className='checkerlang' onChange= {(e) => setLanguage(e.target.value) } >
         <option value="English">English</option>
    <option value="Arabic">Arabic</option>
    <option value="French">French</option>
    <option value="Chinese">Chinese</option>
</select>
</form>
</div>
    </div>
<div className='row'>
  <div className="col" >
      {
        start.filter(fact => fact.language === language  & !fact.users.includes(localStorage.getItem("email"))).map((fact) =><Card desc={fact.desc} link={fact.link}  /> )
      }
  </div>
  <div  className="col">
  {
        end.filter(fact => fact.language === language  & !fact.users.includes(localStorage.getItem("email"))).map((fact) =><Card desc={fact.desc} link={fact.link}  /> )
      }
  </div>
  
      </div>


    </div>
  )
} 
*/