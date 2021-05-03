
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

const Card = (props) => {
const [comment,setComment] = useState('');
const [feedback,setFeedback] = useState('Agree');
  const  handleSubmit =   () => {
    axios.put('/api/api/check',{
      link:props.link,
      Comment:comment,
      feedback:feedback,
      desc:props.desc,
      user:localStorage.getItem("email")
    }).then((x)=> console.log(x.data))
  }
    return(
      <form onSubmit={handleSubmit} className='check-contaier' >
      <div className='row'>  
        <div><h3># {props.username}</h3></div>
        <h1>{props.index}</h1>
         <select id="Agree" name="Agree" value = 'Agree' className='checkerlang' onChange={(e) => setFeedback(e.target.value)}>
<option value="Agree">Agree</option>
<option value="Disagree">DisAgree</option>
<option value="misinformation">Misinformation</option>
<option value="DisAgree">DisAgree</option>
</select></div>
     <p style={{width:"90%",margin:"auto",overflow:"hidden",margin:"15px"}}>{props.desc}</p>
     <a href={props.link}style={{width:"90%",margin:"auto",overflow:"hidden",margin:"15px"}}>{props.link}</a>
     <div className="checker-row">
          <button className='btn' type='submit'>Submit</button>

     <input className='checker-input' onChange={(e) => { setComment(e.target.value) } }  />
       </div>
     </form>
    )
}

export class ComplainList extends React.Component {
  state = {
    facts: [],
    start:[],
    end:[],
    display:""
  }

  
  componentDidMount() {
    axios.get(`/api/api/submitfact`)
      .then(res => {
        const facts = res.data;
        this.setState({ facts:facts })
      });
  }
 
 
  render() {

    return (
      <div className='checker' style={{margin:"auto",width:"100%"}}> 
        { 
             this.state.facts.filter(fact => fact.language === this.props.language  & !fact.users.includes(localStorage.getItem("email"))).map((fact,index) =><Card desc={fact.desc} link={fact.link} username={fact.username} /> )
  }
      </div>
           
        )
  } 
}


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