
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
       })
       
       try{
        setTimeout("location.reload()",500)
       }
       catch (error){
         console.log(error)
       }
     
     } catch (error) {
       console.log(error)
     }
  }
    return(
      <form  className='check-contaier'  onSubmit={e => handleCheck(e)} >
      <div className='row'>  
        <div><h3>@{props.username}</h3></div>
        <h1>{props.index}</h1>
         <select id="True" name="True" required  className='checkerlang' onChange={(e) => setFeedback(e.target.value)} defaultValue="True" >
<option value="Propoganda ">Propoganda</option>
<option value="True ">True</option>
<option value="False ">False</option>
<option value="Misinformation ">Misinformation</option>
<option value="Disinformation ">Disinformation</option>
<option value="Hate Speech ">Hate Speech</option>
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
        setFacts(shuffle(facts))
      });
    }

    fetchData()
  },[])
  return(
    <div className="checker">
      {
          facts.filter(fact => fact.language === props.language  && !fact.users.includes(localStorage.getItem("email"))).filter(fact =>!fact.users.includes(localStorage.getItem("email"))).reverse().map((fact,index) =><Card desc={fact.desc} link={fact.link} username={fact.username} /> )
      }
    </div>
  )
}



