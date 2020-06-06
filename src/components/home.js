import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navigation from './partials/navbar';
import Slider from './partials/slider';
import HomeAbout from './partials/homeabout';
import Departments from './partials/departments';
import Square from './partials/square';
import Achievements from './partials/achievements';
import Footer from './partials/footer';
import Testimonials from './partials/testimonials';


class Home extends Component {


    render() {

    //   const mystyle = {
    //   color: "blue",
    //   height:"100px"
    // };

        return (
            <div>
                <Navigation />
                <div>
                  <Slider />
                </div>
                <div>
                <Square />
                </div>
                <div>
                <Departments/>
                </div>
                <div  className="my-5">
                <HomeAbout/>
                </div>
                <div>
                <Achievements />
                </div>
                <div className="">
                  <Testimonials />
                </div>

                <div className="">
                <Footer />
                </div>



            </div>
        )
    }
}

export default Home;
