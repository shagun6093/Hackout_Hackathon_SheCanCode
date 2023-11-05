// import React, { useState, useEffect } from 'react';

// const View = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Replace with your API endpoint to fetch profile data
//     fetch('YOUR_API_ENDPOINT')
//       .then((response) => response.json())
//       .then((data) => setProfileData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const handleAccept = () => {
//     // Send an accept request to the backend
//     // Replace with your API call logic
//   };

//   const handleReject = () => {
//     // Send a reject request to the backend
//     // Replace with your API call logic
//   };

//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile-page">
//       <img src={profileData.profileImg} alt="Profile" />
//       <div className="details">
//         <h2>Name: {profileData.name}</h2>
//         <p>Age: {profileData.age}</p>
//         <p>Problem: {profileData.problem}</p>
//         <p>Date of Appointment: {profileData.date}</p>
//         <p>Time of Appointment: {profileData.time}</p>
//       </div>
//       <div className="action-buttons">
//         <button onClick={handleAccept}>Accept</button>
//         <button onClick={handleReject}>Reject</button>
//       </div>
//     </div>
//   );
// };

// export default View;

import React from 'react';
import './view.css';
// import profileImg from "./assets/about.jpeg";

const View = (props) => {
  const {
    name,
    age,
    problem,
    date,
    time,
   
    onAccept,
    onReject,
  } = props;

  return (
    <div className="profile-page">
        <h2>See Pateints Request</h2>
      <div className="profile-info">

        <div>
        <img src="\images\undraw_Female_avatar_efig.png"alt="Profile" />
        </div>
        
        <div className="details">
          
          <h2>Name: Archie Shah</h2>
          <p>Age: 19 </p>
          <p>Problem: I have been experiencing irregular periods lately, and it's causing me some concern. My menstrual cycle has become unpredictable, with variations in the length of my cycle and the amount of bleeding. I would like to understand the possible reasons behind this and explore potential solutions. </p>
          <p>Date of Appointment: 2023-11-23 </p>
          <p>Time of Appointment: 05:02</p>
        </div>
      </div>
      <div className="action-buttons">
        <div>
            <button onClick={onAccept}>Accept</button></div>
        <div>
            <button onClick={onReject}>Reject</button></div>
      </div>
    </div>
  );
};

export default View;
