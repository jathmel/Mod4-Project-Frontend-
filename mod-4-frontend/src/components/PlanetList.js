import React, { Component } from 'react';
import PlanetItem from './PlanetItem'

class PlanetList extends Component {
  
  renderPlanets = () => {
    return this.props.planets.map(planet => <PlanetItem planet={planet} key={planet.id} handlePlanetClick={this.props.handlePlanetClick}
    hoverName={this.props.hoverName} />)
  }

  render() {
    return (
      <div className="PlanetList">
        {this.renderPlanets()}

      </div>
    );
  }
}

export default PlanetList;
