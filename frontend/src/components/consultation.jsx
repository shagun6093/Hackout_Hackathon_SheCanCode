import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './appointments.css';

export default function Consultation() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors when the component mounts
    fetch('http://localhost:5000/api/doctors')
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  return (
    <div className="appointments">
      <div className="patient">
        {doctors.map((doctor, index) => (
          <div className="cards" key={index}>
            <img src="/images/doctor-pfp2.jpg" alt="Doctor Profile" />
            <h3>Name: {doctor.username}</h3>
            <h4>Speciality: {doctor.specs}</h4>
            <button>
              <Link style={{ color: 'white', textDecoration: 'none' }} to="/bookappointment">
                Book Appointment
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
