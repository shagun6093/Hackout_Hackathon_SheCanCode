import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    problem: '',
    appointmentdate: '',
    appointmenttime: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('problem', formData.problem);
    formDataToSend.append('appointmentdate', formData.appointmentdate);
    formDataToSend.append('appointmenttime', formData.appointmenttime);
  
    try {
      const response = await axios.post('http://localhost:5000/api/book_appointment', formDataToSend);
      console.log(response.data);
      // Handle successful appointment booking
    } catch (error) {
      console.error('Appointment booking error:', error);
    }
  };
  

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='container'>
        <h2>Book Appointment</h2>
        <div className='feild'>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className='feild'>
          <label>Age:</label>
          <input
            type='number'
            name='age'
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
        <div className='feild'>
          <label>Problem:</label>
          <textarea
            name='problem'
            value={formData.problem}
            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          />
        </div>
        <div className='feild'>
          <label>Appointment Date:</label>
          <input
            type='date'
            name='appointmentdate'
            value={formData.appointmentdate}
            onChange={(e) => setFormData({ ...formData, appointmentdate: e.target.value })}
          />
        </div>
        <div className='feild'>
          <label>Appointment Time:</label>
          <input
            type='time'
            name='appointmenttime'
            value={formData.appointmenttime}
            onChange={(e) => setFormData({ ...formData, appointmenttime: e.target.value })}
          />
        </div>
        <button className='button' type='submit'>
          Send Request
        </button>
      </div>
    </form>
  );
}

export default Book;
