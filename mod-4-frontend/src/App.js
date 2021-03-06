import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import SpaceContainer from './components/SpaceContainer'
import video from './media/Stars.mp4'
import { createUser, getUser } from './adapters/Adapter'



class App extends Component {
  state = {
    currentUser: ''
  }

  handleLogIn = (e, username, password) => {
    e.preventDefault()
    getUser(username).then(data => {
      this.setState({
        currentUser: data
      }, () => console.log(this.state.currentUser))
    })
  }

  handleSignUp = (e, username, password, name) => {
    e.preventDefault()
    createUser(name, username, password).then(res => {
      this.setState({
        currentUser: res
      }, () => console.log(this.state.currentUser))
    })
  }
  render() {
    return (
      <div className="App">
        <video className="video" src={video} autoPlay={'true'} loop> </video>
          {this.state.currentUser ?
          <div>
            <SpaceContainer currentUser={this.state.currentUser}/>
          </div>
          :
          <LandingPage handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>}
        </div>
    );
  }
}

export default App;

//        {this.state.currentUser ?
          //   <SpaceContainer />
          // :
          // <div></div>}
// <div><h1>Space</h1></div>

// <LandingPage handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>
