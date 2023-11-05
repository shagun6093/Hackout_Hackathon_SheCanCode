import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './appointments.css';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Initialize to null

  useEffect(() => {
    // Fetch appointments from the backend when the component mounts
    axios.get('http://localhost:5000/api/appointments')
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []); // Empty dependency array to fetch data once on component mount

  // Function to set the selected appointment when a name card is clicked
  const handleCardClick = async (appointment) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/appointments/${appointment.name}`);
      
      if (response.data.message && response.data.message === "Appointment not found") {
        // Handle the case where the appointment was not found
        console.log('Appointment not found');
      } else {
        setSelectedAppointment(response.data);
      }
    } catch (error) {
      console.error('Error fetching appointment details:', error);
    }
  };

  return (
    <div className="appointments">
      {appointments.map((appointment, index) => (
        <div className="patient" key={index} onClick={() => handleCardClick(appointment)}>
          <div className="cards">
            {/* Display appointment details */}
            <h3>Name: {appointment.name}</h3>
            <h4>Age: {appointment.age}</h4>
            <button>
              <Link style={{ color: "white", textDecoration: "none" }} to="/view">
                See Request
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
