import React , { useState,useContext} from 'react'
import {AuthContext} from '../../App';
import axios from 'axios'
import {Accordion, Form, Button , Modal , MydModalWithGrid} from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





let PatientProfile=()=>{


  const initialState = {
    patientName:"",
    gender:"",
    dateOfBirth:new Date(),
    bloodGroup:'',
    cnic:'',
    isSubmitting: false,
    errorMessage: null,
    successMessage:null
  };
  let [data, setData] = React.useState(initialState);

  let handleInputChange = event => {
     setData({
       ...data,
       [event.target.name]: event.target.value
     });
   };



   const handleFormSubmit = event => {

       event.preventDefault();
       setData({
         ...data,
         isSubmitting: true,
         errorMessage: null
       });
       axios({
         method: 'post',
         url: '/patient/register',
         data: {patientName:data.patientName,gender:data.gender ,email:data.email,  password:data.password,dateOfBirth:data.dateOfBirth, mobileNumber:'+92'+data.mobileNumber}
       })

     .then(function (response) {
       console.log('+++++ response',response);
       // notify(response.data.message);
       setData({
             isSubmitting: false,
           });

     })
     .catch(error=>{

       console.log('++++ error',error.response.data);
       setData({
             ...data,
             isSubmitting: false,
             errorMessage: error.response.data.message
           });
     });


   };


    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>



          <form onSubmit={handleFormSubmit}>

          <div className="form-group">

              <input type="text" className="form-control" required onChange={handleInputChange} name="patientName" value={data.patientName}  placeholder="Patient Name"/>
            </div>
          <div className="form-group">

              <input type="email" className="form-control"  onChange={handleInputChange} name="email" value={data.email}    placeholder=" E-mail"/>
              {data.errorMessage && (<span className="form-error mt-2 text-danger">{data.errorMessage}</span>)}
            </div>
          <div className="form-group">
          <div class="input-group mb-2">
               <div class="input-group-prepend">
                 <div class="input-group-text"> +92 </div>
               </div>
               <input type="text" class="form-control" required  onChange={handleInputChange} minlength="10" maxlength="10" name="mobileNumber" value={data.mobileNumber}     id="inlineFormInputGroup" placeholder="Mobile Number" />
             </div>
           </div>

            <div class="form-group row">
              <label for="dateOfBirth" class="col-sm-3 col-form-label">Date of Birth</label>
              <div class="col-sm-9 " id="dateOfBirth" >
              <DatePicker

                   selected={data.dateOfBirth}
                   onChange={date=>setData({
                     ...data,
                     dateOfBirth:date
                   })}
                 />
              </div>
            </div>

           <Form.Group controlId="exampleForm.ControlSelect1">

                <Form.Control as="select"  required onChange={handleInputChange} name="gender" value={data.gender}    >
                <option>Select Gender</option>
                <option>male</option>
                <option>female</option>
              </Form.Control>
            </Form.Group>




           <div className="form-group">
             <input type="password" id="exampleInputPassword1" minlength="8" maxlength="20"  onChange={handleInputChange} name="password" value={data.password}     placeholder="Password (Must be 8-20 characters long.)"  class="form-control" aria-describedby="passwordHelpInline"/>

          </div>




          </form>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button >Save Changes</Button>
          </Modal.Footer>
        </Modal>
      );
    }





  let user=useContext(AuthContext);
  let [profileImage, updateImage]=useState({file:null});
  const [modalShow, setModalShow] = useState(false);

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


    <p className="font-weight-bold bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.patientName} </span>
    </p>
     <p className="font-weight-normal bg-light p-3  border  rounded"> <span className="h5"> {user.state.user.mobileNumber } </span>
     <span className="float-right"> {user.state.user.isVerified? <button className="btn btn-outline-danger"> Change Number </button> : <button className="btn btn-outline-primary"> Verify </button>} </span>
      </p>
      <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.dateOfBirth} </span>

       </p>
      <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.gender} </span>

       </p>
       <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.bloodGroup? user.state.user.bloodGroup : 'Add Blood Group'} </span>

        </p>
        <p className="font-weight-normal bg-light p-3 border  rounded"> <span className="h5"> {user.state.user.cnic? user.state.user.cnic : 'Add CNIC'} </span>

         </p>
         <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit Profile
      </Button>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </div>
    </div>

    </div>
  )
}


export default PatientProfile;
