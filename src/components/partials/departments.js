

import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css'
import './../css/style.css'
let Departments=()=>{
  return(
    <section className="service-tab">
    <div className="container-fluid">
        <div className="block-title text-center">
            <h2 className="block-title__title">Our Departments</h2>
            <p className="block-title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom <br/> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <ul className="nav nav-tabs tab-title" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" to="#department-1" role="tab" data-toggle="tab">
                    <i className="clainc-icon-tooth1"></i>>
                    Dental Care
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#department-2" role="tab" data-toggle="tab">
                    <i className="clainc-icon-brain"></i>
                    Neurology
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#department-3" role="tab" data-toggle="tab">
                    <i className="clainc-icon-heart"></i>
                    Cardiology
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#department-4" role="tab" data-toggle="tab">
                    <i className="clainc-icon-kidney"></i>
                    Hepatology
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#department-5" role="tab" data-toggle="tab">
                    <i className="clainc-icon-baby-boy"></i>
                    Pediatric
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#department-6" role="tab" data-toggle="tab">
                    <i className="clainc-icon-medicines"></i>
                    Primary Care
                </Link>
            </li>
        </ul>
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane show active  animated fadeInUp" id="department-1">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="#" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane animated fadeInUp" id="department-2">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane animated fadeInUp" id="department-3">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="#" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane animated fadeInUp" id="department-4">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="#" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane animated fadeInUp" id="department-5">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="#" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane animated fadeInUp" id="department-6">
                <div className="row no-gutters">
                    <div className="col-lg-6 d-flex">
                        <div className="about-one__content-block my-auto">
                            <h3 className="about-one__title">Here Is Your Awesome Title <br/> Lorem Ipsum Dolor</h3>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br/> Risus comcenas accumsan lacua.labore et dolore magna aliqua.</p>
                            <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <Link to="#" className="thm-btn about-one__btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image-wrap wow fadeInRight" data-wow-duration="2s">
                            <div className="row no-gutters">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-1.jpg" alt="Awesome " />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-2.jpg" alt="Awesome " />
                                    </div>
                                    <div className="about-one__image">
                                        <img src="images/resources/about-2-3.jpg" alt="Awesome " />
                                    </div>
                                </div>
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

export default Departments;
