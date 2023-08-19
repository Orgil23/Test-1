import React from 'react'
import './Sfour.css'
import { BiCheckboxChecked } from "react-icons/bi";
const Sfour = () => {
  return (
    <div className='main'>
        <div className="first">
            <div className="sign">
                <p>Sign In</p>
            </div>
            <div className="username">
                <p>username</p>
                <input type="text" placeholder='Username' />
            </div>
            <div className="password">
                <p>Password</p>
                <input type="password" placeholder='Password' />
            </div>
            <div className="signin">
                <button>Sign In</button>
            </div>
            <div className="bottom">
            <BiCheckboxChecked className='icon' onClick={{}}/><p className="rem">Remember Me</p>
                <p className="forgot">Forgot Password</p>
            </div>
        </div>
        <div className="second">
            <div>
                <p className="welcome">Welcome to login</p>
                <p>Don't have an account?</p>
            <button className='sup'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Sfour