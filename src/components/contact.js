import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css'
import Navigation from './partials/navbar';
import Footer from './partials/footer';

let Contact=()=>{
  return(

    <div>
    <Navigation />
    <section className="contact-one">
    <h1 className="text-primary text-center">Contact Us</h1>
            <div className="container mt-5">
                <div className="row justify-content-between no-gutters">
                    <div className="col-lg-5">
                        <h3 className="contact-one__title">Get in Touch</h3>
                        <form action="#" className="contact-one__form contact-form-validated">
                            <input type="text" name="name" placeholder="Full Name"/>
                            <input type="text" name="email" placeholder="Email Address"/>
                            <textarea placeholder="Your Messege" name="message"></textarea>
                            <button type="submit" className="thm-btn contact-one__btn">Send</button>
                        </form>
                    </div>

                    <div className="col-lg-4">
                        <div className="contact-one__info">
                            <div className="contact-one__icon">
                                <i className="clainc-icon-information-button"></i>
                            </div>
                            <h3 className="contact-one__info__title">Contact Detail</h3>
                            <p className="contact-one__info__text">203, Envato Labs. Alis Steet <br/> Melbourne, Australia.</p>
                            <p className="contact-one__info__text"><span>Call us:</span> <br/> +123 4567 8910</p>
                            <p className="contact-one__info__text"><span>Mail us:</span> <br/> support@mail.com</p>
                            <div className="contact-one__info__social">
                                <Link to="/"><i className="fa fa-facebook-f"></i></Link>
                                <Link to="/"><i className="fa fa-twitter"></i></Link>
                                <Link to="/"><i className="fa fa-pinterest-p"></i></Link>
                                <Link to="/"><i className="fa fa-youtube-play"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>





  )
}

export default Contact;
