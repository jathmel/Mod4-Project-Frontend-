import React, { Component } from 'react';
import UserProfile from './UserProfile'
import '../NavBar.css'

class Navbar extends Component {
  render() {
    debugger
    return (
    <div id="sidebar-wrapper" >
      <ul className="sidebar-nav">

      <li className="sidebar-brand">
        <a href="#">Profile</a>
      </li>
      <li className="sidebar-brand">
        <a href="#">Dashboard</a>
      </li>
      <li className="sidebar-brand">
        <a href="#">Logout</a>
      </li>


      </ul>
    </div>
    );
  }
}

export default Navbar;
