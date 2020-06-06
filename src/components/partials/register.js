import React ,{useState} from 'react';

import logo from "../../logo.svg";
import {Nav , Accordion ,Form  } from 'react-bootstrap';
import Navbar from './navbar';
import {Link , Redirect} from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


let Register=()=>{
  const initialState = {
    patientName:"",
    email: "",
    doctorName:"",
    password: "",
    mobileNumber:"",
    gender:"",
    dateOfBirth:new Date(),
    isSubmitting: false,
    errorMessage: null,
    successMessage:null
  };
let [data, setData] = React.useState(initialState);
let [activeValue,updateValue]=useState({patientActiveValue:true,doctorActiveValue:false})

let handleInputChange = event => {
   setData({
     ...data,
     [event.target.name]: event.target.value
   });
 };

//// fazol kam
// const [startDate, setStartDate] = useState(new Date());
const notify = (message) => toast.success(message);



/////  Submit Data
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
    notify(response.data.message);
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


/////  doctor Submit Data
const doctorHandleFormSubmit = event => {

    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    axios({
      method: 'post',
      url: '/doctor/register',
      data: {doctorName:data.doctorName,gender:data.gender ,email:data.email,  password:data.password,dateOfBirth:data.dateOfBirth, mobileNumber:'+92'+data.mobileNumber}
    })

  .then(function (response) {
    console.log('+++++ response',response);
    notify(response.data.message);
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


return(
  <div>
  <Navbar />
  {data.successMessage ? <Redirect to='/login' />: null}
  <div className="mt-2">
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
  <Accordion defaultActiveKey="0">
  <Nav justify variant="tabs" defaultActiveKey="1">
  <Nav.Item>
    <Accordion.Toggle active={activeValue.patientActiveValue} onClick={()=>{ updateValue({patientActiveValue:true,doctorActiveValue:false}) }}  as={Nav.Link}  eventKey="0">
      Patient
    </Accordion.Toggle>
  </Nav.Item>
  <Nav.Item>
    <Accordion.Toggle  active={activeValue.doctorActiveValue} onClick={()=>{ updateValue({patientActiveValue:false,doctorActiveValue:true}) }}  as={Nav.Link} eventKey="1">
      Doctor
    </Accordion.Toggle>
  </Nav.Item>

</Nav>

<Accordion.Collapse eventKey="0">

<div className="col-lg-6 col-md-10 col-sm-10 mx-auto mt-2" >

<h3 className="text-center py-3">Patient Register</h3>

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


  <div className="form-row">
      <div className="col-4">
      <button disabled={data.isSubmitting}  className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">

      {data.isSubmitting ? (
                <img className="spinner" src={logo} alt="loading icon" />
              ) : (
                "Register"
              )}

      </button>
      </div>

      <div className="col-8 text-center pt-2">
        <p className="font-weight-normal">Already Have Account?&nbsp; <Link to="/login">Login </Link></p>
      </div>

    </div>
      <hr />
      <div class="form-group row mt-3">
    <label for="staticEmail" class="col-sm-5 col-form-label">Sign Up with Social Networks</label>
    <div class="col-sm-7">
      <i class="fab fa-2x  text-primary fa-facebook-square"></i> <i class="fab text-danger fa-2x px-4 fa-google"></i>
    </div>

    </div>
</form>

</div>





</Accordion.Collapse>



<Accordion.Collapse eventKey="1">
<div className="col-lg-6 col-md-10 col-sm-10 mx-auto mt-2">
<h3 className="text-center py-3">Doctor Register</h3>


<form onSubmit={doctorHandleFormSubmit}>

<div className="form-group">

    <input type="text" className="form-control" required onChange={handleInputChange} name="doctorName" value={data.doctorName}  placeholder="Dr. Name"/>
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


  <div className="form-row">
      <div className="col-4">
      <button disabled={data.isSubmitting}  className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">

      {data.isSubmitting ? (
                <img className="spinner" src={logo} alt="loading icon" />
              ) : (
                "Register"
              )}

      </button>
      </div>

      <div className="col-8 text-center pt-2">
        <p className="font-weight-normal">Already Have Account?&nbsp; <Link to="/login">Login </Link></p>
      </div>

    </div>
      <hr />
      <div class="form-group row mt-3">
    <label for="staticEmail" class="col-sm-5 col-form-label">Sign Up with Social Networks</label>
    <div class="col-sm-7">
      <i class="fab fa-2x  text-primary fa-facebook-square"></i> <i class="fab text-danger fa-2x px-4 fa-google"></i>
    </div>

    </div>
</form>

</div>
</Accordion.Collapse>




</Accordion>
  </div>

  </div>
)

}














export default Register;
