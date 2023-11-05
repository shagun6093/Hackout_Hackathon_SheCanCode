// import React, { useState, useEffect } from 'react';

// const PatientTable = () => {
//   const [patientData, setPatientData] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint to fetch patient data
//     fetch('YOUR_API_ENDPOINT')
//       .then((response) => response.json())
//       .then((data) => setPatientData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Patient List</h2>
//       <table className="patient-table">
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Problem</th>
//             <th>Age</th>
//             <th>Date</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patientData.map((patient, index) => (
//             <tr key={index}>
//               <td>{patient.name}</td>
//               <td>{patient.problem}</td>
//               <td>{patient.age}</td>
//               <td>{patient.date}</td>
//               <td>{patient.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PatientTable;

import './pastpatients.css';
import React from 'react';

const dummyPatientData = [
  {
    name: 'John Doe',
    problem: 'Fever',
    age: 30,
    date: '2023-11-15',
    time: '10:00 AM',
  },
  {
    name: 'Alice Smith',
    problem: 'Headache',
    age: 25,
    date: '2023-11-16',
    time: '02:30 PM',
  },
  {
    name: 'Bob Johnson',
    problem: 'Cough',
    age: 45,
    date: '2023-11-17',
    time: '09:15 AM',
  },
];

const PatientTable = () => {
  return (
    <div>
      <h2>Patient List</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Problem</th>
            <th>Age</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {dummyPatientData.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.problem}</td>
              <td>{patient.age}</td>
              <td>{patient.date}</td>
              <td>{patient.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
