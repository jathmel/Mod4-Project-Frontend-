import React, {
  Component
} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import SpaceContainer from './components/SpaceContainer'


class App extends Component {
  render() {
    return (
      <div className="App">

        <SpaceContainer />
      </div>
    );
  }
}

export default App;