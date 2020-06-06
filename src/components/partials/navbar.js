import React ,{useContext} from 'react';
import { Button , Nav   , Navbar  , Dropdown  ,NavItem , NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadTop from './headtop';
import './navbar.css'
//        import css file
import './../css/style.css'
import { AuthContext } from "../../App";

// import './../css/responsive.css'
// import  About  from './../about'
let Navigation=()=>{
  let authentication=useContext(AuthContext)
  let dropdwonFunction=()=>{
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  }
    return(
        <div>
            <div>
            <HeadTop />
            </div>
            <Navbar bg="light" expand="lg" className="">

  <Navbar.Brand href="#home">
      <img
        alt=""
        src={'images/vc192.png'}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Virtual clinic
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
  <Nav className="mx-5" activeKey="/home">
  <Nav.Item>
    <Nav.Link><span><Link to="/">Home</Link></span></Nav.Link>
  </Nav.Item>

  <Dropdown className="px-1" as={NavItem}>
  <Dropdown.Toggle as={NavLink}><Link to="/">Departments</Link></Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Coming Soon</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  <Nav.Item>
    <Nav.Link><Link to="/about">About</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/">Blog</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
  </Nav.Item>

</Nav>
{console.log('++++ authentication',authentication)}
  {authentication.state.isAuthenticated ?  <Dropdown className="px-1 mr-5">
  <Dropdown.Toggle ><i className="fa fa-user fa-2x"></i></Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item><Link to="/profile"> Profile </Link></Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item onClick={()=>{authentication.dispatch({type:'LOGOUT'})}}>LOGOUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> : <Link to="/login"><Button variant="outline-primary">Login</Button></Link>}

  </Navbar.Collapse>


</Navbar>

            </div>

    )
}


export default Navigation;
