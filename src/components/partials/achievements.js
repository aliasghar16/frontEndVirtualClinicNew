import React from 'react';
// import { Link } from 'react-router-dom';
import './../css/style.css'

let Achievements=()=>{
  return(
    <section className="fun-fact-two">

    <div className="container">
        <div className="block-title text-center">
            <h2 className="block-title__title block-title__light-color">Our Achievements</h2>
            <p className="block-title__text block-title__light-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom <br/> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-medical fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">250</span>k</h3>
                    <p className="fun-fact-two__text">Satisfied Patients</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-stethoscope-1 fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">300</span>+</h3>
                    <p className="fun-fact-two__text">Expert Doctor</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-electrocardiogram-inside-heart fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">98.5</span>%</h3>
                    <p className="fun-fact-two__text">Success Surgeries</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="fun-fact-two__single">
                    <i className="clainc-icon-prize-badge-with-star-and-ribbon fun-fact-two__icon"></i>
                    <h3 className="fun-fact-two__title"><span className="counter">49</span>+</h3>
                    <p className="fun-fact-two__text">National Awards</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Achievements;
