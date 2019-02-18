import React, { Component } from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail'
import NavBar from './NavBar'

class SpaceContainer extends Component {

  state = {
    planets: [],
    singlePlanetDetail: '',
    showSinglePlanet: false,
    hoverName: '',
    isHovered: false
  }
// will only be called once
  componentDidMount() {
    fetch('https://dry-plains-91502.herokuapp.com/planets.json')
      .then(r => r.json())
      .then((data) => {
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

  handleMouseOut = () => {
    this.setState({
      hoverName: '',
      // isHovered: !this.state.isHovered
    })
  }

  handlePlanetHover = (planet) => {
    this.setState({
      isHovered: !this.state.isHovered
    })
    }

  showPage () {
    if (this.state.showSinglePlanet) {
      return (
        <PlanetDetail handleDetailClick={this.handleDetailClick} singlePlanetDetail={this.state.singlePlanetDetail} />
      )
    } else {
      return (
        <PlanetList planets={this.state.planets} handlePlanetClick={this.handlePlanetClick} hoverName={this.state.hoverName}
        handlePlanetHover={this.handlePlanetHover} isHovered={this.state.isHovered}/>
      )
    }
  }


  render() {
    return (
      <div className="SpaceContainer" style={{height:"100%"}} onMouseOver={this.handleMouseOut}>
        <NavBar />
        {this.showPage()}
      </div>
    );
  }
}

export default SpaceContainer;
