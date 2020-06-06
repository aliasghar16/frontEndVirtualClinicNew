import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './navbar';
import Navigation from './partials/navbar';
import Footer from './partials/footer';
import HomeAbout from './partials/homeabout';
import Achievements from './partials/achievements';
class About extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1 className="my-5 text-primary text-center">About Us</h1>
                <HomeAbout />
                <Achievements />
                <Footer />
            </div>
        )
    }
}


export default About;
