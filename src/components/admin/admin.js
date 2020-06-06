import React , {useState, useContext ,useEffect } from 'react';

// import { Link } from 'react-router-dom';
// import Clinic from './clinic';
import UserContext from './../context/userContext';




let Admin=()=>{
let [user,updateUser]=useState({})

let data=useContext(UserContext);

console.log('++++ data',data);

useEffect(()=>{

  updateUser(data.user)


},[])

// function changeName(){
//   dispatch('change_name')
// }

  return(
      <div>
          <h1> USer Data</h1>
          <h3> name :: {user.name}  </h3>
          <h4> gae  :: {user.age} </h4>
          <button onClick={()=>{ data.dispatch({type:'update_data',payload:{name:'ali',age:'25'}}) }}> update user </button>
      </div>
  )
}

export default Admin;
