import React, { Component } from 'react';
import PlanetItem from './PlanetItem'
import sun from '../media/sun_nasa.jpg'
import HoverName from './HoverName'

class PlanetList extends Component {

  renderPlanets = () => {
    return this.props.planets.map(planet => <PlanetItem planet={planet} key={planet.id} handlePlanetClick={this.props.handlePlanetClick} hoverName={this.props.hoverName} handlePlanetHover={this.props.handlePlanetHover} isHovered={this.props.isHovered}
    />)

  }

  render() {
    return (
      <div className="PlanetList" style={{top: "50%", position:"relative"}}>
        <img src={sun} alt='nothing' width="150" height="150" />
        {this.renderPlanets()}
      </div>
    );
  }
}

export default PlanetList;
