import React, { useState, useEffect } from 'react';
import Consultation from './consultation';
import Calendar from './calendar';
import ImageReader from './upload';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [username, setUsername] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Fetch the username from the backend API
    fetch('http://localhost:5000/api/latest_username')
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
      })
      .catch((error) => {
        console.error('Error fetching username:', error);
      });
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="doctors-info">
            <div className="doctor-img">
              <img src="./images/doctor-pfp.svg" alt="Doctor Profile" />
              <h2>Name: {username}</h2>
            </div>
          </div>
          <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Book a Consultation
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Period tracking
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Reports Vault
        </div>
      </div>
    
        </div>
        <div className="content">
          {activeTab === 'tab1' && <div className='consul'><Consultation /></div>}
          {activeTab === 'tab2' && <div><Calendar/></div>}
          {activeTab === 'tab3' && <div><ImageReader/></div>}
        </div>
      </div>
    </>
  );
}
