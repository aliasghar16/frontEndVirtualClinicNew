import React from 'react';
import './../css/style.css'
import { Link } from 'react-router-dom';

let Footer=()=>{
  return(
    <footer className="footer-one">
    <div className="footer-one__top">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="footer-one__widget footer-one__link-widget">
                        <h3 className="footer-one__widget-title">Nevigation</h3>
                        <ul className="footer-one__links-list">
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Departments</Link></li>
                            <li><Link to="#">Doctors</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="footer-one__widget footer-one__link-widget">
                        <h3 className="footer-one__widget-title">Quick Links</h3>
                        <ul className="footer-one__links-list">
                            <li><Link to="#">Get Appointment</Link></li>
                            <li><Link to="#">Our Doctor Team</Link></li>
                            <li><Link to="#">Departments Service</Link></li>
                            <li><Link to="#">About Hospital</Link></li>
                            <li><Link to="#">Contact</Link></li>
                            <li><Link to="#">Get Reports</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="footer-one__widget footer-one__link-widget">
                        <h3 className="footer-one__widget-title">Departments</h3>
                        <ul className="footer-one__links-list">
                            <li><Link to="#">Cardiology</Link></li>
                            <li><Link to="#">Pediatric</Link></li>
                            <li><Link to="#">Phychology</Link></li>
                            <li><Link to="#">Dental</Link></li>
                            <li><Link to="#">Neurology</Link></li>
                            <li><Link to="#">Orthopedics</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <div className="footer-one__widget footer-one__link-widget">
                        <h3 className="footer-one__widget-title">Emergency</h3>
                        <ul className="footer-one__links-list">
                        <li><Link to="#">Appointment</Link></li>
                            <li><Link to="#">Doctors</Link></li>
                            <li><Link to="#">Cabins</Link></li>
                            <li><Link to="#">Treatments</Link></li>
                            <li><Link to="#">Surgery</Link></li>
                            <li><Link to="#">Consultancy</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footer-one__widget footer-one__link-widget">
                        <h3 className="footer-one__widget-title">Follow Us</h3>
                        <div className="footer-one__social">
                            <Link to="#"><i className="fa fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                            <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                            <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-one__middle">
        <div className="container">
            <div className="inner-container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="footer-one__widget about-widget">
                            <a href="index.html" className="footer-one__logo"><img src="images/resources/logo-1-2.png" alt="Awesome " /></a>
                            <p className="footer-one__text">Lorem ipsum dolorit amet consectetur adipi scing <br /> elit sedo eiusmod incididunt uttom labore etto <br /> dolore magna aliqua.</p>
                            <Link to="#" className="footer-one__map-link">View on google map</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="footer-one__widget contact-widget">
                            <h3 className="footer-one__widget-title">Email</h3>
                            <ul className="footer-one__contact-list">
                                <li className="footer-one__contact-list-item">hello@clainc.com</li>
                                <li className="footer-one__contact-list-item">emergency@live.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-one__widget contact-widget">
                            <h3 className="footer-one__widget-title">Phone</h3>
                            <ul className="footer-one__contact-list">
                                <li className="footer-one__contact-list-item">+1234 4567 7890</li>
                                <li className="footer-one__contact-list-item">+009 6612 3456 8</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-one__widget contact-widget">
                            <h3 className="footer-one__widget-title">Address</h3>
                            <ul className="footer-one__contact-list">
                                <li className="footer-one__contact-list-item">1234 North Luke Lane,</li>
                                <li className="footer-one__contact-list-item">South Bend, IN 360001</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-one__bottom">
        <div className="container">
            <p className="footer-one__copy-text">&copy; 2020 OneTouch Solutions | All Right Reserved</p>
            <ul className="footer-one__bottom-links">
                <li className="footer-one__bottom-links-item"><Link to="#">Privacy and Policy</Link></li>
                <li className="footer-one__bottom-links-item"><Link to="#">Terms and Services</Link></li>
                <li className="footer-one__bottom-links-item"><Link to="#">Developers</Link></li>
            </ul>
        </div>
    </div>

</footer>

  )
}

export default Footer;
