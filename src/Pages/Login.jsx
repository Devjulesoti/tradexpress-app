import React from 'react'
import { Link } from "react-router-dom";
import '../styles/login.css'

const Login = () => {
  return (
    <div className="login-section">
      <h3>Welcome Back</h3>
      
      <form action="" className="login-form">

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="remember">
          <div><input type="checkbox" />
          <p>Remember Password</p>
          </div>
          <Link>Forgot  Password</Link>
        </div>
      </form>
      
      <Link className="login-btn" to="/verifymail">Login</Link>
      <p className="account">
        New User? <Link to='/getstarted' className="click-text">Click here</Link>
      </p>
    </div>



















    
  )
}

export default Login