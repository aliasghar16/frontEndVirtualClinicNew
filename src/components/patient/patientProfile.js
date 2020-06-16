import React , { useState,useContext,useEffect} from 'react'
import {AuthContext} from '../../App';
import axios from 'axios'
import {Accordion, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import logo from "../../logo.svg";
  import ReactDOM from 'react-dom';
  import Modal from 'react-modal';



let PatientProfile=()=>{

let user=useContext(AuthContext);
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      // background-color: 'coral',
      border: '2px dotted SteelBlue',
      background:'WhiteSmoke',
    }
  };

  const initialState = {
    patientName:user.state.user.patientName,
    gender:user.state.user.gender,
    dateOfBirth:user.state.user.dateOfBirth,
    // gender:user.state.user.gender,
    cnic:user.state.user.cnic,
    bloodGroup:user.state.user.bloodGroup,
    oldPassword:'',
    newPassword:'',
    isSubmitting: false,
    errorMessage: null,
    successMessage:null
  };


let [data, setData] = React.useState(initialState);
  let [profileImage, updateImage]=useState({file:null});
const [modalIsOpen,setIsOpen] = React.useState(false);
const [passwordModalIsOpen,passwordSetIsOpen] = React.useState(false);
let [textHide,textHiddenUpdate]=useState(true);

console.log('++++++ data',data);

const notify = (message) => toast.success(message);

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

  function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
      // modelClass.style.background-color='grey'
    }

    function closeModal(){
      setIsOpen(false);
    }


///////    Password Modal

  function passwordOpenModal() {
      passwordSetIsOpen(true);
    }


    function passwordCloseModal(){
      passwordSetIsOpen(false);
    }

    let handleInputChange = event => {
       setData({
         ...data,
         [event.target.name]: event.target.value
       });
     };


     const handleEditFormSubmit = event => {

         event.preventDefault();
         setData({
           ...data,
           isSubmitting: true,
           errorMessage: null
         });
         axios({
           method: 'put',
           url: '/patient/updateGeneral',
           data: {patientName:data.patientName,gender:data.gender ,dateOfBirth:data.dateOfBirth, bloodGroup:data.bloodGroup,cnic:data.cnic}
         })

       .then(function (response) {
         console.log('+++++ response',response.data.message);
         user.dispatch({
             type: "UpdateUser",
             payload: response.data
         })
         setIsOpen(false);
         notify(response.data.message);
         setData({
           ...data,
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

     //   start change password


     const handleChangePasswordFormSubmit = event => {

         event.preventDefault();
         setData({
           ...data,
           isSubmitting: true,
           errorMessage: null
         });
         axios({
           method: 'post',
           url: '/patient/changepassword',
           data: {newPassword:data.newPassword,oldPassword:data.oldPassword }
         })

       .then(function (response) {
         console.log('+++++ response',response.data.message);
         passwordSetIsOpen(false);
         notify(response.data.message);
         setData({
           ...data,
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

    useEffect(()=>{
    Modal.setAppElement('body')
  },[user])


  return(
    <div className="col-lg-10 col-md-10 col-sm-10 m-auto">
    <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  />
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
     <button className="btn-outline-danger btn mb-5" onClick={passwordOpenModal}> Change Password </button>

     {/* Password Modal start */}

     <div>
     <Modal
       isOpen={passwordModalIsOpen}
       onRequestClose={passwordCloseModal}
       style={customStyles}
       contentLabel="Example Modal2"
     >
       <div>
         <h3 className="text-center">ChnagePassword</h3>

         <form onSubmit={handleChangePasswordFormSubmit}>

         <div class="form-group">
         <label htmlFor="exampleInputPassword1">Old Password</label>
         <input type={textHide ? 'password' :'text'} class="form-control" minlength="8" maxlength="20" onChange={handleInputChange} id="exampleInputPassword1" name="oldPassword" placeholder="Old Password" />
       </div>

       <div class="form-group">
         <label htmlFor="exampleInputPassword2">New Password</label>
         <input type={textHide ? 'password' :'text'} class="form-control" id="exampleInputPassword2"  minlength="8" maxlength="20"  onChange={handleInputChange} name="newPassword"  placeholder="New Password" />
       </div>

       <div class="form-check mb-3">
    <input type="checkbox" onChange={()=>{textHiddenUpdate(!textHide)}} class="form-check-input" id="showPassword" />
    <label class="form-check-label" htmlFor="showPassword">Show Password</label>
  </div>

         <button className="btn btn-outline-danger" onClick={passwordCloseModal}> Cancel </button>

           <div className="form-row float-right mb-5">
               <div className="mr-1">
               <button disabled={data.isSubmitting} type="submit" className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">

               {data.isSubmitting ? (
                         <img className="spinner" src={logo} alt="loading icon" />
                       ) : (
                         "Save Changes"
                       )}

               </button>
               </div>

             </div>

         </form>


       </div>

     </Modal>
     </div>

     {/* Password Modal end */}



    </div>
    <div className="col-lg-9 col-md-9 col-sm-12 bg-light border rounded">


    <p className="font-weight-normal mt-3"><span className="h5"> {user.state.user.patientName} </span> <span className="float-right"><button className="btn btn-outline-primary"  onClick={openModal}>Edit Profiel </button></span>
    </p>

    <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <h3 className="text-center">Edit Profile</h3>

        <form onSubmit={handleEditFormSubmit}>

        <div className="form-group">

            <input type="text" className="form-control" required onChange={handleInputChange} name="patientName" value={data.patientName}  placeholder="Patient Name"/>
          </div>


          <div class="form-group row">
            <label for="dateOfBirth" class="col-sm-3 col-form-label">Date of Birth</label>
            <div class="col-sm-9 " id="dateOfBirth" >

            </div>
          </div>

          <div class="input-group mb-3">
          <div class="input-group-prepend">
         <label class="input-group-text" htmlFor="gender">Gender</label>
       </div>
     <select value={data.gender}  onChange={handleInputChange} name="gender" class="form-control" id="gender">
     <option>Select</option>
     <option value="Male">Male</option>
     <option value="Female">Female</option>



     </select>
     </div>


     <div class="input-group mb-3">
     <div class="input-group-prepend">
    <label class="input-group-text" htmlFor="bloodGroup">Blood Group</label>
  </div>
<select  class="form-control" value={data.bloodGroup}  onChange={handleInputChange} name="bloodGroup"  id="bloodGroup">
  <option>Select</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>

</select>
</div>



<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text" >CNIC </span>
</div>
<input type="input"  maxlength="13" pattern="\d{13}" onChange={handleInputChange} name="cnic" value={data.cnic}     placeholder="Enter CNIC"  class="form-control" />
</div>


        <button className="btn btn-outline-danger" onClick={closeModal}> Cancel </button>

          <div className="form-row float-right mb-5">
              <div className="mr-1">
              <button disabled={data.isSubmitting} type="submit" className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">

              {data.isSubmitting ? (
                        <img className="spinner" src={logo} alt="loading icon" />
                      ) : (
                        "Save Changes"
                      )}

              </button>
              </div>



            </div>



        </form>


      </div>

    </Modal>
  </div>




    <hr />
     <p className="font-weight-normal"> <span className="h5" > {user.state.user.mobileNumber } </span>
     <span className="float-right"> {user.state.user.isVerified? <button className="btn btn-outline-danger"> Change Number </button> : <button className="btn btn-outline-primary"> Verify </button>} </span>
      </p>
      <hr />
      <p> <span className="font-weight-Bold h5"> DoB : </span> <span className="font-weight-normal h6"> {user.state.user.dateOfBirth} </span>

       </p>
       <hr />
       <p>
       <span className="font-weight-Bold h5"> Gender : </span> <span className="font-weight-normal h6"> {user.state.user.gender} </span>
       </p>
       <hr/>
       <p><span className="font-weight-Bold h5"> Blood Group :</span> <span className="font-weight-noraml h6"> {user.state.user.bloodGroup? user.state.user.bloodGroup : 'Nill'} </span>
        </p>
        <hr />
        <p> <span className="font-weight-Bold h5"> CNIC : </span> <span className="font-weight-normal h6"> {user.state.user.cnic? user.state.user.cnic : 'Nill'} </span>

         </p>
    </div>
    </div>
    </div>
  )
}


export default PatientProfile;
