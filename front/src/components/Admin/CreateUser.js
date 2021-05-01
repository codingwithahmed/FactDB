import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

     
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="admin-container">
    <h1 className='admin-top'>Create User by email</h1>
    <div className='admin-input-container ' > 
    <div>
 <button  className="admin-btn">Username</button>
 <input className='admin-input '  onChange = {(e) => {setUsername(e.target.value)}} />
 </div>
 <br />
 <div>
 <input type='password' className='admin-input '  onChange = {(e) => {setPassword(e.target.value)}} />
 <button  className="admin-btn">Password</button>
 </div>
 <br />

 <div>
 <button  className="admin-btn">Email</button>
 <input type='email' className='admin-input '  onChange = {(e) => {setEmail(e.target.value)}} />
 </div>
 <br />
 <button onClick={registerHandler} className="admin-btn admin-done">Done</button>

     


    </div>
</div>
  );
};

export default RegisterScreen;
