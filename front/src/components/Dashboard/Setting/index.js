import React , {useState,useEffect} from 'react'
import './index.css'
import axios from "axios"
export default function Index() {
    const [username,setUsername] = useState("")
    const [email, setEmail] = useState('')
    const [walletaddress,setWalletaddress] = useState("")
    useEffect(() => {
        const getData = aysnc =>  {
            axios.post("/api/api/user/" , {
                email:localStorage.getItem("email")
            }).then((user => {
                console.log(user)
                setEmail(user.data.email)
                setUsername(user.data.username)
                setWalletaddress(user.data.walletaddress)
            }))

        }

        getData()
    }, [])
    const handleSave = (username,email,walletaddress) => {
      axios.put("/api/api/user/signup",{
        username,email,walletaddress
      })
    }
    return (
        <form className='setting' onSubmit={handleSave(username,email,walletaddress)}>
         
            <div className='row'>
               
                <div className="col ">
                   <h2 className='setting-heading'>User Name</h2>
                   <input className='setting-input setting-input-half 'value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>

            <div className="col">
               <h2 className='setting-heading'>Email</h2>
               <input type="email" className='setting-input 'value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="col">
                <h2 className='setting-heading'>Wallet Address</h2>
                <input className='setting-input' value={walletaddress} onChange={(e) => setWalletaddress(e.target.value)} />
            </div>
         
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn">Save</button>
                </div>
                <div className="col">
                    <button className="btn">Withdraw</button>
                </div>
            </div>
            <div className="row">
            <h3  className='setting-heading'>We are working towards making FactCoin Redeemable. Please continue to
fact-check. We will soon let you know how to redeem via Email provided.</h3>
            </div>
        </form>
    )
}
