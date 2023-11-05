import './nav.css'
import {Link} from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import logo from './assets/logo.png'


export default function Navbar(){

    const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(false);

  const toggleLoginDropdown = () => {
    setLoginIsOpen(!loginIsOpen);
    if (signupIsOpen) setSignupIsOpen(false);
  };

  const toggleSignupDropdown = () => {
    setSignupIsOpen(!signupIsOpen);
    if (loginIsOpen) setLoginIsOpen(false);
  };
    
  return(
    <>
    <div className="nav-container">
    <div className="navbar">
      <div className="logo">
        <img style={{width:"400px",borderRadius:"3px"}} src={logo}/>
      </div>
    <div className="nav-list">
      <ul>
        <li><Link to="/"className ='link'>Home</Link></li>
        <li><Link to="/consultation"className ='link'>Consultation</Link></li>
        <li><Link to="/store"className ='link'>Store</Link></li>
        <li><Link to="/prediction"className ='link'>Period Prediction</Link></li>

        <div className="dropdown">
              <button onClick={toggleLoginDropdown} className="btn">
                Login
              </button>
              {loginIsOpen && (
                <div className="dropdown-content">
                  <Link to="/doctor-login">Doctor Login</Link>
                  <Link to="/user-login">User Login</Link>
                </div>
              )}
            </div>

    <div className="dropdown">
              <button onClick={toggleSignupDropdown} className="btn">
                Sign Up
              </button>
              {signupIsOpen && (
                <div className="dropdown-content">
                  <Link to="/doctor-signup">Doctor SignUp</Link>
                  <Link to="/user-signup">User SignUp</Link>
                </div>
              )}
            </div>  

      </ul>
    </div>
    </div>
    </div>


    </>
  )
}