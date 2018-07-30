import React, {
  Component
} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import SpaceContainer from './components/SpaceContainer'
import { createUser } from './adapters/Adapter'



class App extends Component {
  state = {
    currentUser: ''
  }

  handleSubmit = (e, username, password, name) => {
    e.preventDefault()
    createUser(name, username, password)
  }
  render() {
    return (
      <div className="App">
        <LandingPage handleSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

export default App;
