
import React, { Component } from 'react';
import '../PlanetDetail.css'


class PlanetDetail extends Component {
  render() {
    return (
      <div id="DetailContainer">
        <img id="imgDetail" src={require(`../media/${this.props.singlePlanetDetail.name}.gif`)} alt='nothing' />
        <table id="PlanetDetail">
          <tr style={{margin:"0", fontSize:"50px"}}> {this.props.singlePlanetDetail.name} </tr>
          <tr>
            <td>density (km/m^3):</td>
            <td>{this.props.singlePlanetDetail.density} </td>
          </tr>
          <tr>
            <td> distance from sun (km): </td>
            <td>{this.props.singlePlanetDetail.distance_from_sun}  </td>
          </tr>
          <tr>
            <td>gravity (m/s^2):</td>
            <td>{this.props.singlePlanetDetail.gravity} </td>
          </tr>
          <tr>
            <td>length of day (hrs):</td>
            <td>{this.props.singlePlanetDetail.length_of_day} </td>
          </tr>
          <tr>
            <td>mean temperature (C): </td>
            <td>{this.props.singlePlanetDetail.mean_temperature}  </td>
          </tr>
          <tr>
            <td>mass (* 10^24 kg):</td>
            <td>{this.props.singlePlanetDetail.mass} </td>
          </tr>
          <tr>
            <td>number of moons:</td>
            <td>{this.props.singlePlanetDetail.number_of_moons} </td>
          </tr>
          <tr>
            <td>orbital period (days):</td>
            <td>{this.props.singlePlanetDetail.orbital_period} </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <button onClick= {(e)=> {this.props.handleDetailClick()}} type="button">Finished Reading!</button>
          </tr>
        </table>
      </div>
    );
  }
}

export default PlanetDetail;
