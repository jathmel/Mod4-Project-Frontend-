import React, { Component } from 'react';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';
import '../NavBar.css'

class Navbar extends Component {
  render() {
    return (
    <div id="sidebar-wrapper" >
      { this.props.current_user && (<div className="item">
        <p>Welcome! { this.props.currentUser.name }</p>
      </div>) }
      <ul className="sidebar-nav">

      <li className="sidebar-brand">
        <Link to='/profile'>Profile</Link>
      </li>
      <li className="sidebar-brand">
        <Link to="/dashboard" onClick={this.props.onDashboardClick}>Dashboard</Link>
      </li>
      <li className="sidebar-brand">
        <a onClick={this.props.logOut}>Logout</a>
      </li>


      </ul>
    </div>
    );
  }
}

export default Navbar;
