import './dashboard.css'
import { useState } from 'react';
import Appointments from './appointments';
import PatientTable from  './pastpatients';
import Calendar from './calendar'

export default function Dashboard(){

    const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return(
    <>
    <div className="dashboard">
    <div className="sidebar">
        <div className="doctors-info">
            <div className="doctor-img">
                <img src='./images/doctor-pfp2.jpg'/>
                <h2>Name: Shagun Gupta</h2>
            </div>
        </div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Appointments
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Calendar
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Patients History
        </div>
      </div>
    </div>
    <div className="content">
        {activeTab === 'tab1' && <div><Appointments /></div>}
        {activeTab === 'tab2' && <div><Calendar/></div>}
        {activeTab === 'tab3' && <div><PatientTable/></div>}
      </div>
    </div>
    </>
  )

    
}
