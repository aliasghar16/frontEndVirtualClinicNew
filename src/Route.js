import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Admin from './components/admin/admin';
import Clinic from './components/admin/clinic';
import Login from './components/partials/login';
import Register from './components/partials/register';
import Profile from './components/partials/profile';

// import Navbar from './components/navbar';
import Code from './components/admin/code';


let createBrowserHistory =require("history").createBrowserHistory
// import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route path='/contact' component={Contact}/>
                    <Route path="/admin"  component={Admin}/>
                    <Route path="/clinic"  component={Clinic}/>
                    <Route path="/login"  component={Login} />
                    <Route path="/register" component={Register}/>

                    <Route path="/profile" component={Profile} />

                    <Route path="/test" component={Code} />

                </div>
            </Router>
        )
    }
}

export default Routers;
