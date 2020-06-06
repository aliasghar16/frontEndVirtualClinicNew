import React from 'react';
import { Link } from 'react-router-dom';
import './../css/style.css'

let HomeAbout=()=>{
  return(
    <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-three__content">
                            <h3 className="about-three__title">About Our Hospital</h3>
                            <p className="about-three__tag-line">Better health care with efficient cost is the main <br /> focuse of our hospital. </p>
                            <p className="about-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis <br /> ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas <br /> accumsan lacus vel facilisis.</p>
                            <p className="about-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis <br /> ipsum suspendisse ultrices gravida. </p>

                            <Link className="about-three__btn thm-btn" to="/">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-prize-badge-with-star-and-ribbon"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Medical Quality</Link></h3>
                                        <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-operating-room"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Modern Labs</Link></h3>
                                        <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-microscope"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">Cutting Edge Technology</Link></h3>
                                        <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="about-three__box">
                                        <div className="about-three__box-icon">
                                            <i className="clainc-icon-doctor"></i>
                                        </div>
                                        <h3 className="about-three__box-title"><Link  to="/">24/7 Dedicated Doctors</Link></h3>
                                        <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HomeAbout;
