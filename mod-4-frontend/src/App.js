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
<<<<<<< HEAD
      <div className="App container">
        <div><h1>Space</h1></div>
        {this.state.currentUser ? <h1>Welcome {this.state.currentUser.name.toUpperCase()}</h1> : <LandingPage handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>}

=======
      <div className="App">
        <video src={video} autoPlay={'true'} loop style={{position:"absolute", height:"100%", zIndex:"-1"}}></video>
        <SpaceContainer />
>>>>>>> jee
      </div>
    );
  }
}

export default App;
