import React, {useState} from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import amazonlogo from "../../Assets/amazon_logo.png"
import { useStateValue } from '../../StateProvider';
//import { actionTypes } from '../../reducer';
function Login() {
    const [{basket,user}, dispatch ] = useStateValue ()

    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = (e)=>{
        e.preventDefault()

        dispatch({
            type: "Set_USER",
            user: {
               email:email,
            }
        })
        history.push("/payment")
    }

    const register = (e)=>{
        e.preventDefault()
        history.push("/")

    }
    return (
        <div className="login">
            <Link to = "/">
            <img className="login_logo" src={amazonlogo}  alt="" /> 
            </Link>
             
             <div className="login_container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

                     <h5>Password</h5>
                     <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

                     <button onClick={signIn} type='submit' className='login_signInButton'>Sign In</button>
                 </form>
                 <p>
                     By Signing-in you agree to amazon's
                     Conditions of Use & Sale. Please see Our
                     Privacy Notice, Our Cookies Notice and our 
                     Interest-Based Ads Notice.
                 </p>

                 <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login
