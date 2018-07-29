import React, {
  Component
} from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail'

class SpaceContainer extends Component {

  state = {
    planets: [],
    singlePlanetDetail: '',
    showSinglePlanet: false,
    hoverName: ''
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
      showSinglePlanet: !this.state.showSinglePlanet
    })
  }

  handleDetailClick = () => {
    this.setState({
      showSinglePlanet: !this.state.showSinglePlanet
    })
  }

  showPage () {
    if (this.state.showSinglePlanet) {
      return (
        <PlanetDetail handleDetailClick={this.handleDetailClick} singlePlanetDetail={this.state.singlePlanetDetail}  />
      )
    } else {
      return (
        <PlanetList planets={this.state.planets} handlePlanetClick={this.handlePlanetClick} hoverName={this.state.hoverName}/>
      )

    }
  }
  render() {
    return (
      <div className="SpaceContainer" style={{height:"100%"}}>

        {this.showPage()}

      </div>
    );
  }
}

export default SpaceContainer;
