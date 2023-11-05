import React, { useState } from 'react';
import axios from 'axios';
import "./signup.css"
import { Link } from 'react-router-dom';
import img1 from "./assets/undraw_girl.png";

function LoginUser() {
  const [formData, setFormData] = useState({
    username: '',
    // name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cycleRegularity: '',
    lastPeriodDate: '',
    cycleDuration: '',
    cycleDays: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user_signup', formData);
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };



  return (
     
      <form className='form' onSubmit={handleSubmit}>
        <div className='b'>
        <img src={img1}>
        </img>
    </div>
    <div className='container'>
        <h2>User Login</h2>
        <div className='feild' >
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        {/* <div className='feild'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div> */}
        <div className='feild'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='feild'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
  
  
      <button className="button" type="submit">Login</button>
      <div > 
        <p>Don't have an account? <button  className='login'type="submit"><Link style={{color:"white" ,textDecoration:"none"}} to="/user-signup">Sign Up</Link></button></p>
      </div>
      </div>
    </form>
   
  );
}

export default LoginUser;