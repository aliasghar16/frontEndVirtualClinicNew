import React,{useEffect ,useState} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

import {Table ,  Form } from 'react-bootstrap';


let Clinic=()=>{
  let [clinic,updateClinic]=useState([])
  useEffect(()=>{
    axios({method:'get',url:' /admin/clinic/getUnapprovedClinic'} )
  .then(response=>{
    console.log('response ----',response.data.clinic);
    updateClinic(response.data.clinic)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    //
  },[])

  // function viewClinic(item){
  //   console.log('++++++ item ------',item)
  //   return(
  //     <h1>Working</h1>
  //   )
  // }

  return(
    <div>
    <Link to="/admin">Go to admin</Link>

    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Mobile No</th>
      <th>Status</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
  {clinic.length > 0 ? (
          clinic.map(item => (
            <tr key={item._id}>
            <td>{item.clinicName}</td>
            <td>{item.mobileNumber}</td>
            <td><Form>
  <Form.Check
    type="switch"
    id={item._id}
    label="Check this switch"
    value="1"
  />
</Form>
    </td>
            </tr>
          ))
        ) : (
          <h1>Loading ...</h1>
        )}


  </tbody>
</Table>



    </div>
  )
}

export default Clinic;
