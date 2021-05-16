import React ,{useState,useEffect} from 'react'
import SearchRounded from '@material-ui/icons/SearchRounded'
import axios from "axios"
export default function Search() {
    const [info,setInfo] = useState(null)
    const [tweet,settweet] = useState('')
    const [result,setresult] = useState(null)
    const [sarcasm,setSarcasm] = useState(null)
    const [Racsim,setRacsim] = useState(null)
    const [IsInsult,setIsInsult] = useState(null)
    const [Clickbait,setClickbait] = useState(null)
    const [heading,setheading] = useState(null)
    const [para, setPara] = useState(null)
    const [bl,setbl] = useState(null)
    const handleSearch= async (e) => {
      
      const i = () =>{ return(<div className="loader"></div>) }
   setbl(i)
        e.preventDefault();
         console.log('sad')

         const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
          console.log('sad')

        try {
            if(!tweet){
                console.log('sadda')

              setClickbait(null)
              setIsInsult(null)
              setRacsim(null)
              setSarcasm(null)
              setPara(null)
              setheading(null)
              setresult(null)
            }

          const {twee} = await axios.post(
              '/api/api/post',
              {link:tweet},
              config
          ).then((post) => {
            console.log('asa')
            setbl(null)
            if(post.data.Headline == 'Url is not valid'){
              setPara('Url is not valid')
              setheading('Url is not valid')
              
            }
            else{
              setPara(post.data.desc)
              setheading(post.data.Headline)
              setClickbait(post.data.Clickbait)
              setIsInsult(post.data.IsInsult)
              setRacsim(post.data.Racsim)
              setSarcasm(post.data.Sarcasm)
              setresult(post.data.Result)
            }
          })

            }

         catch (error) {
            return console.log('fas')
        }
    }

    return (
        <div className="search">
            <div className="searchSpace center"  >
                <h1 style={{padding:"15px"}}>Try AI Analyzer </h1>
                <p>Paste any Link below get result</p>
                
            </div>
            
             <form onSubmit={handleSearch}>
            <div className="Searchsearchbox">
                 <SearchRounded fontSize="large" className=""/>
                  <input placeholder="Enter Link to check" className="" onChange= {(e) => settweet(e.target.value)} />
                  <button className="btn-outline" o>Check</button>  
            </div>
            </form>
            <div className="SearchContent">
            {bl}
            <div>
                  <h1> Sarcasm : {sarcasm} </h1>
                  <h1> ClickBait : {Clickbait} </h1>
                  <h1> Racism : {Racsim} </h1>
                  <h1>Factual accuracy : {result} </h1>
                  <h1>Insult : {IsInsult } </h1>
                </div>
           
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}
