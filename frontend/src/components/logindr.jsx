import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import img1 from "./assets/undraw_doctor_kw5l.png";
import { Link } from 'react-router-dom';

function Logindr() {
  const [formData, setFormData] = useState({
    username: '',
    password: '', // Removed email and added password
  });

  const [loginMessage, setLoginMessage] = useState(''); // To display login status

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.data.message === 'Login successful') {
        // Handle successful login, you can redirect the user or update the UI
        setLoginMessage('Login successful. Redirecting...');

        // // Example: Redirect to another page
        // // Replace '/dashboard' with the path you want to redirect to
        // window.location.href = '/dashboard';
      } else {
        setLoginMessage('Login sucessful');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginMessage('Login failed');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='b'>
        <img src={img1} alt="Doctor" />
      </div>
      <div className='container'>
        <h2>Dr. Login</h2>
        <div className='feild'>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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

        <button className="button" type="submit">
        <Link to="/drdashboard">
          Login
        </Link>
        </button>
        <div>
          <p>{loginMessage}</p>
        </div>
        <div>
          <p>
            Don't have an account?{' '}
            <button className='login' type="submit">
              <Link style={{ color: "white", textDecoration: "none" }} to="/user-signup">Sign Up</Link>
            </button>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Logindr;
