import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav  >
        <div className="nav-wrapper #3f51b5 indigo darken-1">
        <a style= {{fontSize:"3rem"}}href="/" className="brand-logo">DemoApp</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink activeStyle={{fontSize:"1.8rem"}}  exact to = "/">Home</NavLink></li>
        
            <li><NavLink activeStyle={{fontSize:"1.8rem"}} exact to = "/Dash">Dashboard</NavLink></li>
            
        </ul>
        </div>
  </nav>
  )
}

export default Navbar
