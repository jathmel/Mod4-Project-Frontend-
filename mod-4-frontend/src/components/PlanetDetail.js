import React, { Component } from 'react';

class PlanetDetail extends Component {
  render() {
    return (
      <div className="PlanetDetail">
          <h1> {this.props.singlePlanetDetail.name} </h1>
          <p> density: {this.props.singlePlanetDetail.density} </p>
          <p> distance from sun: {this.props.singlePlanetDetail.distance_from_sun} km </p>
          <p> gravity: {this.props.singlePlanetDetail.gravity} </p>
          <p> length of day: {this.props.singlePlanetDetail.length_of_day} </p>
          <p> mass: {this.props.singlePlanetDetail.mass} </p>
          <p> mean temperature: {this.props.singlePlanetDetail.mean_temperature} </p>
          <p> number of moons: {this.props.singlePlanetDetail.number_of_moons} </p>
          <p> orbital period: {this.props.singlePlanetDetail.orbital_period} </p>


      </div>
    );
  }
}

export default PlanetDetail;
