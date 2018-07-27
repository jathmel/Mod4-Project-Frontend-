import React, {
  Component
} from 'react';
import PlanetList from './PlanetList'

class SpaceContainer extends Component {

  state = {
    planets: []
  }

  componentDidMount() {
    fetch('https://dry-plains-91502.herokuapp.com/planets')
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        this.setState({
          planets: data
        })
      })

  }
  render() {
    return (
      <div className="SpaceContainer">

        <PlanetList planets={this.state.planets}/>

      </div>
    );
  }
}

export default SpaceContainer;