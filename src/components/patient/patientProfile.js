import React , { useState,useContext} from 'react'
import {AuthContext} from '../../App';
import axios from 'axios'
import {Accordion, Form, Button} from 'react-bootstrap';


let PatientProfile=()=>{
  let user=useContext(AuthContext);
  let [profileImage, updateImage]=useState({file:null});
  let profileImageSubmit=(e)=>{

    e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage',profileImage.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization':user.state.token
            }
        };
        // console.log('++++++ formData',formData);
        axios.put("patient/updateProfileImage",formData,config)
            .then((response) => {
              console.log('+++++ response',response);
              user.dispatch({
                  type: "UpdateUser",
                  payload: response.data
              })
            }).catch((error) => {
              console.log('+++++ error',error.response.data);
        });


  }
  let fileChange=(e)=>{
    updateImage({file:e.target.files[0]})
  }
  console.log('++++ image',profileImage);
  return(
    <div className="col-lg-10 col-md-10 col-sm-10 m-auto">
    <div className="row mt-5">
    <div className="col-lg-3 col-md-3 sol-sm-12">
      {!user.state.user.profileImage ? <button className="btn btn-outline-primary">Upload Picture</button> :<span> <img src={user.state.user.profileImage} width="207px" height="200px" alt="profile image" className=" img-thumbnail"/>
      <Accordion>
      <Accordion.Toggle as={Button} className="mt-3" eventKey="0">
           Change Picture
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
      <Form onSubmit={profileImageSubmit}>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" name="profileImage" onChange={fileChange} label="Selct Profile Picture" />
  </Form.Group>
  <Button type="submit">Upload</Button>
</Form>
    </Accordion.Collapse>

</Accordion>
     </span>}

     <hr />
     <p className="font-weight-bold text-primary my-3"> {user.state.user.email} </p>
     <hr />
     <button className="btn-outline-danger btn mb-5"> Change Password </button>
    </div>
    <div className="col-lg-9 col-md-9 col-sm-12">

    <Accordion>
    <p className="font-weight-bold bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.patientName} </span>
    <span className="float-right"> <Accordion.Toggle  eventKey="1">  <i className="fa fa-edit fa-2x  text-primary"> </i> </Accordion.Toggle> </span>
     </p>
     <Accordion.Collapse eventKey="1">
     <h1>done</h1>
   </Accordion.Collapse>
     <p className="font-weight-normal bg-light p-3  border  rounded"> <span className="h5"> {user.state.user.mobileNumber } </span>
     <span className="float-right"> {user.state.user.isVerified? <i className="fa fa-edit fa-2x text-primary"> </i> : <button> Verify </button>} </span>
      </p>
      <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.dateOfBirth} </span>
      <span className="float-right"> <i className="fa fa-edit fa-2x text-primary"> </i></span>
       </p>
      <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.gender} </span>
      <span className="float-right"> <i className="fa fa-edit fa-2x text-primary"> </i></span>
       </p>
       <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.bloodGroup? user.state.user.bloodGroup : 'Blood Group'} </span>
       <span className="float-right"> <i className="fa fa-edit fa-2x text-primary"> </i></span>
        </p>
        <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.cnic? user.state.user.cnic : 'CNIC'} </span>
        <span className="float-right"> <i className="fa fa-edit fa-2x text-primary"> </i></span>
         </p>
         </Accordion>
    </div>
    </div>

    </div>
  )
}

export default PatientProfile
