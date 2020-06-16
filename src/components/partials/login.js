import React ,{useState} from 'react';

import {Nav , Accordion  } from 'react-bootstrap';
import Navbar from './navbar';
import {Link ,Redirect} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "../../App";


let Login=()=>{
  const { dispatch } = React.useContext(AuthContext);
  // let history = useHistory();
  const initialState = {
      email: "",
      password: "",
      isSubmitting: false,
      errorMessage: null
    };


let [activeValue,updateValue]=useState({patientActiveValue:true,doctorActiveValue:false})
const notify = (message) => toast.success(message);

const [data, setData] = React.useState(initialState);
let [redirectPage,updateRedirectPage]=useState(false);

const handleInputChange = event => {
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
      url: '/patient/login',
      data: {email:data.email,password:data.password }
    })
      .then(response => {
        console.log('+++++ innner response',response.data);
        dispatch({
            type: "LOGIN",
            payload: response.data
        })
        notify(response.data.message);
        updateRedirectPage(true)
      })
      .catch(error => {
        console.log('++++++ error ',error.response.data);
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.response.data.message
        });
      });
  };

/////////////

const doctorHandleFormSubmit = event => {
  event.preventDefault();
  setData({
    ...data,
    isSubmitting: true,
    errorMessage: null
  });
  axios({
    method: 'post',
    url: '/doctor/login',
    data: {email:data.email,password:data.password }
  })
    .then(response => {
      console.log('+++++ innner response',response.data);
      dispatch({
          type: "LOGIN",
          payload: response.data
      })
      notify(response.data.message);
      updateRedirectPage(true)
    })
    .catch(error => {
      console.log('++++++ error ',error.response.data);
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.response.data.message
      });
    });
};


  // console.log('+++++ data from login',data);


return(
  <div>
  {redirectPage ? <Redirect to="profile"/> : null }
  <Navbar />
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
  <div className="mt-2">
  <Accordion defaultActiveKey="0">
  <Nav justify variant="tabs" defaultActiveKey="1">
  <Nav.Item>
    <Accordion.Toggle active={activeValue.patientActiveValue} onClick={()=>{ updateValue({patientActiveValue:true,doctorActiveValue:false}) }}  as={Nav.Link}  eventKey="0">
      Patient
    </Accordion.Toggle>
  </Nav.Item>
  <Nav.Item>
    <Accordion.Toggle  active={activeValue.doctorActiveValue} onClick={()=>{ updateValue({patientActiveValue:false,doctorActiveValue:true}) }}  as={Nav.Link} eventKey="1">
      Dcotor
    </Accordion.Toggle>
  </Nav.Item>

</Nav>

<Accordion.Collapse eventKey="0">

<div className="col-lg-6 col-md-10 col-sm-10 mx-auto mt-2">
<h3 className="text-center py-3">Patient Login</h3>

{ data.errorMessage ? <div class="alert alert-danger" role="alert"> {data.errorMessage} </div> : null }
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" className="form-control"  value={data.email} name="email"  onChange={handleInputChange}  placeholder="Enter email"/>
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">Password</label>
  <input type="password"  placeholder="Password" value={data.password}      name="password"    onChange={handleInputChange} class="form-control" />
  <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
</div>

<div className="form-row">
    <div className="col-7">
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
    </div>
    </div>
    <div className="col-5">
      <p className="font-weight-normal">Forget Password ?</p>
    </div>
  </div>
  <div className="form-row">
      <div className="col-4">
      <button onClick={handleFormSubmit} className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">Login</button>
      </div>
      <div className="col-8 text-center pt-2">
        <p className="font-weight-normal">Don't have account?&nbsp; <Link to='/register'>Create One </Link></p>
      </div>
    </div>
      <hr />
      <div class="form-group row mt-3">
    <label for="staticEmail" class="col-sm-5 col-form-label">Sign in with Social Networks</label>
    <div class="col-sm-7">
      <i class="fab fa-2x  text-primary fa-facebook-square"></i> <i class="fab text-danger fa-2x px-4 fa-google"></i>
    </div>

    </div>


</div>



</Accordion.Collapse>



<Accordion.Collapse eventKey="1">
<div className="col-lg-6 col-md-10 col-sm-10 mx-auto mt-2">
<h3 className="text-center py-3">Doctor Login</h3>


<form onSubmit={doctorHandleFormSubmit}>
{ data.errorMessage ? <div class="alert alert-danger" role="alert"> {data.errorMessage} </div> : null }
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" className="form-control"  value={data.email} name="email"  onChange={handleInputChange}  placeholder="Enter email"/>
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">Password</label>
  <input type="password"  placeholder="Password" value={data.password}      name="password"    onChange={handleInputChange} class="form-control" />
  <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
</div>

<div className="form-row">
    <div className="col-7">
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
    </div>
    </div>
    <div className="col-5">
      <p className="font-weight-normal">Forget Password ?</p>
    </div>
  </div>

  <div className="form-row">
      <div className="col-4">
      <button className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">Login</button>
      </div>
      <div className="col-8 text-center pt-2">
        <p className="font-weight-normal">Don't have account?&nbsp; <Link to='/register'>Create One </Link></p>
      </div>
    </div>
      <hr />
      <div class="form-group row mt-3">
    <label for="staticEmail" class="col-sm-5 col-form-label">Sign in with Social Networks</label>
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














export default Login;
