import React, { useState, useEffect } from 'react';
import './admin.css'; // Import the CSS file

const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);

  // Simulate fetching data from a database
  useEffect(() => {
    // Replace this with actual API or database call to fetch data
    const fetchData = async () => {
      try {
        // Simulate fetching doctors' data
        const response = await fetch('/api/doctors'); // Replace with your API endpoint
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRadioChange = (doctorId, option) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) => ({
        ...doctor,
        isYes: option === 'yes' && doctor.id === doctorId,
        isNo: option === 'no' && doctor.id === doctorId,
      }))
    );
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Medical License No.</th>
            <th>Yes</th>
            <th>No</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.licenseNo}</td>
              <td>
                <input
                  type="radio"
                  name={`yesNo_${doctor.id}`}
                  checked={doctor.isYes}
                  onChange={() => handleRadioChange(doctor.id, 'yes')}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`yesNo_${doctor.id}`}
                  checked={doctor.isNo}
                  onChange={() => handleRadioChange(doctor.id, 'no')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;


// import React, { useState } from 'react';
// import './admin.css'; // Import the CSS file

// const DoctorTable = () => {
//   const [doctors, setDoctors] = useState([
//     { id: 1, name: 'Doctor 1', licenseNo: '12345', isYes: false, isNo: false },
//     { id: 2, name: 'Doctor 2', licenseNo: '67890', isYes: false, isNo: false },
//     // Add more doctors as needed
//   ]);

//   const handleRadioChange = (doctorId, option) => {
//     setDoctors((prevDoctors) =>
//       prevDoctors.map((doctor) => ({
//         ...doctor,
//         isYes: option === 'yes' && doctor.id === doctorId,
//         isNo: option === 'no' && doctor.id === doctorId,
//       }))
//     );
//   };

//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor Name</th>
//             <th>Medical License No.</th>
//             <th>Yes</th>
//             <th>No</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td>{doctor.name}</td>
//               <td>{doctor.licenseNo}</td>
//               <td>
//                 <input
//                   type="radio"
//                   name={`yesNo_${doctor.id}`}
//                   checked={doctor.isYes}
//                   onChange={() => handleRadioChange(doctor.id, 'yes')}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="radio"
//                   name={`yesNo_${doctor.id}`}
//                   checked={doctor.isNo}
//                   onChange={() => handleRadioChange(doctor.id, 'no')}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DoctorTable;
