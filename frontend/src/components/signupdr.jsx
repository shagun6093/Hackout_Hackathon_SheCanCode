import React, { useState, useRef } from 'react';
import axios from 'axios';
import "./Signup.css";
import img1 from "./assets/undraw_doctor_kw5l.png";
import { Link } from 'react-router-dom';

function Signupdr() {
  const [image, setImage] = useState(null);
  const [image_url, setImageUrl] = useState(''); // Define image_url state
  const hiddenFileInput = useRef(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    license: '',
    gender: 'male', // Initialize with a default value
    specs: 'Cardiologist', // Initialize with a default value
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleUploadButtonClick = async () => {
    // ... Your upload logic remains the same
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Include the image URL in the form data
      const data = {
        ...formData,
        image: image_url, // Use image_url from state
      };

      // Send the doctor signup data to the server
      const response = await axios.post('http://localhost:5000/api/signup_doctor', data);
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='b'>
        <img src={img1} alt="Doctor" />
      </div>
      <div className='container'>
        <h2>Dr. Sign Up</h2>
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
      <div className='feild'>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
 </div>
 <div className='feild'>
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
 </div>
 <div className='feild'>
        <label>Medical License no.:</label>
        <input
          type="number"
          name="license"
          value={formData.license}
          onChange={(e) => setFormData({ ...formData, license: e.target.value })}
        />
 </div>
        <div  className="feil">
          <label htmlFor="gender" name="gender">Gender: </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="feil">
          <label htmlFor="specs" name="specs">Specialization : </label>
          <select
            id="specs"
            name="specs"
            value={formData.specs}
            onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
          >
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Gynecologist">Gynecologist</option>
                        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Oncologist">Oncologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="ENT Specialist">ENT Specialist</option>
                        <option value="Urologist">Urologist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Ophthalmologist">Ophthalmologist</option>
                        <option value="General Surgeon">General Surgeon</option>
                        <option value="Endocrinologist">Endocrinologist</option>
                        <option value="Rheumatologist">Rheumatologist</option>
                        <option value="Pulmonologist">Pulmonologist</option>                  
                  
          </select>
        </div>
        <div className="image-upload-container">
          {/* ... Your image upload UI */}
        </div>
        <Link to="/drdashboard">
        <button type="submit">Signup</button>
      </Link>
        <div>
          <p>Already have an account? <button className='login' type="submit">Login</button></p>
        </div>
      </div>
    </form>
  );
}

export default Signupdr;
