// import React ,{useContext,useEffect} from 'react';
// import axios from 'axios';
// import DatePicker from "react-datepicker";
// import {Link , Redirect} from 'react-router-dom';
// import "react-datepicker/dist/react-datepicker.css";
// import logo from "../../logo.svg";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import {Form} from 'react-bootstrap';
// import { AuthContext } from "../../App";
//
//
//
//
// let EditProfile=()=>{
//
//
//
// let user = useContext(AuthContext);
// console.log('++++ user',user.state.user);
// let newUSer=user.state.user;
// // console.log('++++ new user ===',newUSer.email);
//   const initialState = {
//     patientName:'ali',
//     // gender:state.user.gender,
//     // dateOfBirth:state.user.dateOfBirth,
//     // gender:state.user.gender,
//     // cnic:state.user.cnic,
//     // isSubmitting: false,
//     // errorMessage: null,
//     // successMessage:null
//   };
//
//   const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };
//
//
// let [data, setData] = React.useState(initialState);
// const [modalIsOpen,setIsOpen] = React.useState(false);
//
//
// var subtitle;
//
//
// function openModal() {
//     setIsOpen(true);
//   }
//
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }
//
//   function closeModal(){
//     setIsOpen(false);
//   }
//
//
//
//
//
//
// useEffect(()=>{
// Modal.setAppElement('body')
// },[])
//
//
// let handleInputChange = event => {
//    setData({
//      ...data,
//      [event.target.name]: event.target.value
//    });
//  };
//
// //// fazol kam
// // const [startDate, setStartDate] = useState(new Date());
// const notify = (message) => toast.success(message);
//
//
//
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
//
//
//
//   return (
//     <div className="m-auto bg-light col-lg-6 col-md-8 col-sm6-12">
//
//         <h3 className="text-center mt-5"> Edit Profile </h3>
//
        <form onSubmit={handleFormSubmit}>

        <div className="form-group">

            <input type="text" className="form-control" required onChange={handleInputChange} name="patientName" value={data.patientName}  placeholder="Patient Name"/>
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
          <Form.Group controlId="exampleForm.ControlSelect1">

               <Form.Control as="select"  required onChange={handleInputChange} name="gender" value={data.gender}    >
               <option>Blood Group</option>
               <option>A+</option>
               <option>A-</option>
               <option>B+</option>
               <option>B-</option>
               <option>AB+</option>
               <option>AB-</option>
               <option>0+</option>
               <option>O-</option>
             </Form.Control>
           </Form.Group>





        <div className="form-group">
          <input type="input" id="exampleInputPassword1" maxlength="13"  onChange={handleInputChange} name="password" value={data.cnic}     placeholder="Enter CNIC"  class="form-control" aria-describedby="passwordHelpInline"/>

       </div>

        <Link className="btn btn-outline-danger" to="/profile"> Cancel </Link>

          <div className="form-row float-right mb-5">
              <div className="mr-5">
              <button disabled={data.isSubmitting}  className="btn btn-primary  col-lg-12 col-md-12 col-sm-12">

              {data.isSubmitting ? (
                        <img className="spinner" src={logo} alt="loading icon" />
                      ) : (
                        "Save Changes"
                      )}

              </button>
              </div>



            </div>

        </form>
//
//
//
//         <div>
//         <button onClick={openModal}>Open Modal</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//
//           <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//           <button onClick={closeModal}>close</button>
//           <div>I am a modal</div>
//           <form>
//             <input type="text" className="form-control" required onChange={handleInputChange} name="patientName" value={data.patientName}  placeholder="Patient Name"/>
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </Modal>
//       </div>
//
//
//
//     </div>
//   )
// }
//
// export default EditProfile;





<div>
<Modal
  isOpen={passwordOpenModal}
  onRequestClose={passwordCloseModal}
  style={customStyles}
  contentLabel="Example Modal"
>
  <div>
    <h3 className="text-center">ChnagePassword</h3>

    <form onSubmit={handleEditFormSubmit}>

    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>




    <div className="form-group">
      <input type="input" id="exampleInputPassword1" maxlength="13" pattern="\d{13}" onChange={handleInputChange} name="cnic" value={data.cnic}     placeholder="Enter CNIC"  class="form-control" aria-describedby="passwordHelpInline"/>

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
