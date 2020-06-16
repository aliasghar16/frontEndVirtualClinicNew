import React , {useContext} from 'react';
import {AuthContext} from '../../App'
import PatientProfile from '../patient/patientProfile';
import DoctorProfile from '../doctor/doctorProfile';
import {Link ,Redirect} from 'react-router-dom';
import Navigation from './navbar';
let Profile =()=>{
  let authentication= useContext(AuthContext);
  return(
    <div>
    <Navigation />
    {authentication.state.user ? authentication.state.user.role=='Patient' ? <PatientProfile /> : < DoctorProfile /> : <Redirect to="/login" />}
    </div>
  )
}

export default Profile
