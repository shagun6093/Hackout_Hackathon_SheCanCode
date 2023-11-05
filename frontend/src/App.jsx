import './App.css'
import Doctordash from './components/dashboard'

import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signupdr from './components/signupdr'
import Signup from './components/signupuser'
import Logindr from './components/logindr'
import Loginuser from './components/loginuser'
import Userdash from './components/userdash'
import ImageReader from './components/upload'
import Book from './components/appointmentform'
import Home from './components/homepage'
import Dashboard from './components/dashboard'
import View from './components/viewappointment'
import PatientTable from './components/pastpatients'
// import DoctorTable from './components/admin'
import Store from './components/store'
import Tracker from './components/tracker'
import Appointments from './components/appointments'





function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    
   
    <Routes>
    <Route path='/doctor-login' element={<Logindr/>} />
    <Route path='/user-login' element={<Loginuser/>} />
    <Route path='/doctor-signup' element={<Signupdr/>} />
    <Route path='/user-signup' element={<Signup/>} />
    <Route path='/consultation' element={<Userdash />} />
    <Route path='/bookappointment' element={<Book />} />
    <Route path='/' element={<Home />} />
    <Route path='/uploadimage' element={<ImageReader />} />
    <Route path='/drdashboard' element={<Dashboard />} />
    <Route path='/view' element={<View />} />
    <Route path='/pastpatient' element={<PatientTable />} />
     <Route path='/store' element={<Store />} />
    <Route path='/prediction' element={<Tracker/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
