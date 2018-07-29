import React, {
  Component
} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import SpaceContainer from './components/SpaceContainer'
import video from './media/Stars.mp4'


class App extends Component {
  render() {
    return (
      <div className="App">
        <video src={video} autoPlay={'true'} loop style={{position:"absolute", height:"100%", zIndex:"-1"}}></video>
        <SpaceContainer />
      </div>
    );
  }
}

export default App;
