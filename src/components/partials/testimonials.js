import React from 'react';
import {Carousel} from 'react-bootstrap'

let Testimonials=()=>{
  return(
    <div className="bg-light">
    <div className="text-center pt-5 col-lg-12 col-md-12 col-sm-12">
    <h2>What Patients Say About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt uttom
labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
    <Carousel>
    <Carousel.Item>

     <div className="d-flex justify-content-around m-5">

     <div className="p-2 bd-highlight">
      <div className="row col-lg-12 col-md-12 col-sm-12">
      <div className="col-lg-2">
        <img src={'images/joker.jpg'} className="rounded-circle" width="75px" alt="ahahha" height="75px"/>
      </div>
      <div className="col-lg-9">
      <h4> Name1 </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom
      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </div>
      </div>


      </div>
     <div className="p-2 bd-highlight">

     <div className="row">
     <div className="col-lg-2">
       <img src={'images/joker.jpg'} className="rounded-circle" width="75px"  alt="ahahha"  height="75px"/>
     </div>
     <div className="col-lg-9">
     <h4> Name2 </h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt uttom
     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
     </div>
     </div>

     </div>

     </div>


    </Carousel.Item>
    <Carousel.Item>
    <div className="d-flex justify-content-around m-5">

    <div className="p-2 bd-highlight">
     <div className="row col-lg-12 col-md-12 col-sm-12">
     <div className="col-lg-2">
       <img src={'images/joker.jpg'} className="rounded-circle" width="75px"  alt="ahahha"  height="75px"/>
     </div>
     <div className="col-lg-9">
     <h4> Name3 </h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom
     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
     </div>
     </div>


     </div>
    <div class="p-2 bd-highlight">

    <div className="row">
    <div className="col-lg-2">
      <img src={'images/joker.jpg'} className="rounded-circle" width="75px"  alt="ahahha"  height="75px"/>
    </div>
    <div className="col-lg-8">
    <h4> Name4 </h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt uttom
    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
    </div>

    </div>

    </div>

    </Carousel.Item>
    <Carousel.Item>
    <div className="d-flex justify-content-around m-5">

    <div className="p-2 bd-highlight">
     <div classNameName="row col-lg-12 col-md-12 col-sm-12">
     <div className="col-lg-2">
       <img src={'images/joker.jpg'} className="rounded-circle" width="75px"  alt="ahahha"  height="75px"/>
     </div>
     <div className="col-lg-9">
     <h4> Name5 </h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt uttom
     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
     </div>
     </div>


     </div>
    <div className="p-2 bd-highlight">

    <div className="row">
    <div className="col-lg-2">
      <img src={'images/joker.jpg'} className="rounded-circle" width="75px"  alt="ahahha"  height="75px"/>
    </div>
    <div className="col-lg-9">
    <h4> Name6 </h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom
    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
    </div>

    </div>

    </div>

    </Carousel.Item>
  </Carousel>
    </div>
  )
}
export default Testimonials
