import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [headline,setHeadline] = useState('')
  const [desc,setDesc] = useState('')
  const [sarcasm,setSarcam] = useState('')
  const [racsim,setracsim] = useState('')
  const [link , setLink] = useState('')
  const [clickbait,setClick] = useState('')
  const [insult,setInsult] = useState('')
  const [valid,setValid] = useState('')

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    

    try {
      const { data } = await axios.post(
        "/api/admin/createpost",
        {
            Headline:headline,
            link:link,
            Clickbait:clickbait,
            IsInsult:insult,
            Result:valid,
            Sarcasm:sarcasm,
            Racsim:racsim,
            desc:desc
        },
        config
      );
      try {
        setTimeout("location.reload()" , 1500)
      } catch (error) {
        console.log(error)

      }
     
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="admin-container">
    <h1 className='admin-top'>Create Post</h1>
    <div className='admin-input-container ' > 
    <div>
 <button  className="admin-btn">Headline</button>
 <input className='admin-input '  onChange = {(e) => {setHeadline(e.target.value)}} />
 </div>
 <br />
 <div>
 <input  className='admin-input '  onChange = {(e) => {setLink(e.target.value)}} />
 <button  className="admin-btn">Link</button>
 </div>
 <br />

 <div>
 <button  className="admin-btn">Clickbait</button>
 <input  className='admin-input '  onChange = {(e) => {setClick(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Sarcasm</button>
 <input  className='admin-input '  onChange = {(e) => {setSarcam(e.target.value)}} />
 </div>
 <br />
 <div>
 <button  className="admin-btn">Racsim</button>
 <input  className='admin-input '  onChange = {(e) => {setracsim(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Insult</button>
 <input  className='admin-input '  onChange = {(e) => {setInsult(e.target.value)}} />
 </div>
 <br />

 <div>
 <button  className="admin-btn">Validaty</button>
 <input  className='admin-input '  onChange = {(e) => {setValid(e.target.value)}} />
 </div>
 <br />
<textarea className='admin-textarea' onChange = {(e) => {setDesc(e.target.value)}} >
    
</textarea>

    </div>
    <button onClick={registerHandler} className="admin-btn admin-done">Done</button>

</div>
  );
};

export default RegisterScreen;
