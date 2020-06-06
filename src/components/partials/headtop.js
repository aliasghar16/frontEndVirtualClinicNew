import React from 'react';
import './headtop.css'
let HeadTop=()=>{
  return(
    <section className="topbar-one">
            <div className="container">
                <ul className="topbar-one__contact">
                    <li className="topbar-one__contact-item"><a href="mailto:help@example.com"><i className="far fa-envelope"></i>help@example.com</a></li>
                    <li className="topbar-one__contact-item"><a href="callto:123456789101"><i className="fas fa-phone"></i>1234&nbsp;&nbsp;5678&nbsp;&nbsp;9101</a></li>
                </ul>
                <div className="topbar-one__buttons">
                    <a href="appointment.html" className="topbar-one__btn">Get Appointment</a>
                </div>
            </div>
        </section>
  )
}

export default HeadTop;
