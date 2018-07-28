import React, {
  Component
} from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail'

class SpaceContainer extends Component {

  state = {
    planets: [],
    singlePlanetDetail: '',
    showSinglePlanet: false
  }

  componentDidMount() {
    fetch('https://dry-plains-91502.herokuapp.com/planets.json')
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        this.setState({
          planets: data
        })
      })

  }

  handlePlanetClick = (planet) => {
    this.setState({
      singlePlanetDetail: planet,
      showSinglePlanet: true
    })
  }

  showPage () {
    if (this.state.showSinglePlanet) {
      return (
        <PlanetDetail singlePlanetDetail={this.state.singlePlanetDetail}  />
      )
    } else {
      return (
        <PlanetList planets={this.state.planets} handlePlanetClick={this.handlePlanetClick}/>
      )

    }
  }
  render() {
    return (
      <div className="SpaceContainer">

        {this.showPage()}

      </div>
    );
  }
}

export default SpaceContainer;
