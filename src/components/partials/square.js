import React from 'react';
import { Link } from 'react-router-dom';
import './../css/style.css'

let Square=()=>{
  return(
    <section className="feature-three feature-three__home-three">
    <div className="container">
        <div className="inner-container wow fadeInUp" data-wow-duration="2s">
            <div className="row">
                <div className="col-lg-4">
                    <div className="feature-three__single ">
                        <i className="feature-three__icon clainc-icon-calendar-1"></i>
                        <h3 className="feature-three__title"><Link to="#">Hospital Schedule</Link></h3>
                        <ul className="feature-three__time">
                            <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                            <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                            <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="feature-three__single ">
                        <i className="feature-three__icon clainc-icon-calendar"></i>
                        <h3 className="feature-three__title"><Link to="#">Get Appointment</Link></h3>
                        <p className="feature-three__text">Lorem ipsum dolor sit amet, consect etur on the adip iscing elit sedo eiusmod lim tempor commodo tiverra maecenas.</p>
                        <Link to="#" className="feature-three__btn">Appointment <i className="fa fa-long-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="feature-three__single ">
                        <i className="feature-three__icon clainc-icon-calendar-1"></i>
                        <h3 className="feature-three__title"><Link to="#">Urgent Helps</Link></h3>
                        <ul className="feature-three__feature">
                            <li className="feature-three__feature-line">
                                <i className="material-icons">done</i>
                                Experienced Doctors
                            </li>
                            <li className="feature-three__feature-line">
                                <i className="material-icons">done</i>
                                Dedicated Professional Staffs
                            </li>
                            <li className="feature-three__feature-line">
                                <i className="material-icons">done</i>
                                24 Hours Emergency Service
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default Square;
