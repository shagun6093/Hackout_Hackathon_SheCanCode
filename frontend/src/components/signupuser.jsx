
import axios from 'axios';
import "./Signup.css"
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


import img1 from "./assets/undraw_girl.png";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        cycleRegularity: 'Regular', // Initialize with a default value
        lastPeriodDate: null,
        cycleDuration: '',
        cycleDays: '',
        image: null, // Add this field for the image file
      });

  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataForSubmit = new FormData();
  
      for (const key in formData) {
        formDataForSubmit.append(key, formData[key]);
      }
  
      const response = await axios.post('http://localhost:5000/api/user_signup', formDataForSubmit);
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });
  
            console.log(file);
            setFormData({ ...formData, image: file });
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };
  
  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };


// Handle date picker changes
const handleDateChange = (date) => {
    setFormData({ ...formData, lastPeriodDate: date });
  };


  return (
     
      <form className='form' onSubmit={handleSubmit}>
       <div className='b'>
  <img src={img1} alt="User" />
</div>

    <div className='container'>
        <h2>User Sign Up</h2>
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
        <div className='feild'>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
  </div>
      
      <div  className="feil" >
        <label   value={formData.gender}
        onChange={(e) => setFormData({ ...formData, cycleRegularity: e.target.value })}
        htmlFor="cycle" name="cycleRegularity:">Cycle Regularity:</label>
        <select>
            <option value="Regular">Regular</option>
            <option value="Irregular">Irregular</option>
            <option value="None">None</option>                  

        </select>
      </div >
      <div className='feild'>
        <label>Last Period Date:</label>
        <DatePicker
          selected={formData.lastPeriodDate}
          onChange={handleDateChange}
        />
      </div>
      <div className='feild'>
        <label>Cycle Duration:</label>
        <input
          type="text"
          name="cycleDuration"
          value={formData.cycleDuration}
          onChange={(e) => setFormData({ ...formData, cycleDuration: e.target.value })}
        />
      </div>
      <div className='feild'>
        <label>Cycle Days:</label>
        <input
          type="text"
          name="cycleDays"
          value={formData.cycleDays}
          onChange={(e) => setFormData({ ...formData, cycleDays: e.target.value })}
        />
      </div>
      <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src="./photo.png" alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
    <Link to="/consultation">
        <button type="submit">Signup</button>
      </Link>
      <div > 
        <p>Already have an account? <button  className='login'type="submit">Login</button></p>
      </div>
      </div>
    </form>
   
  );
}

export default Signup;