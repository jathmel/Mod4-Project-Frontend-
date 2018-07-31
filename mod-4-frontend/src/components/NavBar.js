import React, { Component } from 'react';
import '../NavBar.css'

class Navbar extends Component {
  render() {
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
<<<<<<< HEAD
        <a href="#">Planets</a>
      </li>
      <li className="sidebar-brand">
=======
>>>>>>> 6741b4c9928beb55fd28bbff80c6c07af4091f41
        <a href="#">Logout</a>
      </li>


      </ul>
    </div>
    );
  }
}

export default Navbar;
