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
        <div><h1>Space</h1></div>
        {this.state.currentUser ?
          <div>
            <SpaceContainer />
          </div>
          :
          <LandingPage handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>}
      </div>
    );
  }
}

export default App;
