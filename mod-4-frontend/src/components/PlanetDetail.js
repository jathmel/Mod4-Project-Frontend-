import React, {
  Component
} from 'react';
import '../PlanetDetail.css'

class PlanetDetail extends Component {
  render() {
    return (
      <div id="DetailContainer">
        <img id="imgDetail" src={require(`../media/${this.props.singlePlanetDetail.name}.gif`)} alt='nothing' />
        <table id="PlanetDetail">
          <tr  style={{margin:"0", fontSize:"50px"}}> {this.props.singlePlanetDetail.name} </tr>
          <tr>
            <td>density:</td>
            <td>{this.props.singlePlanetDetail.density}</td>
          </tr>
          <tr>
            <td> distance from sun: </td>
            <td>{this.props.singlePlanetDetail.distance_from_sun}</td>
          </tr>
          <tr>
            <td>gravity:</td>
            <td>{this.props.singlePlanetDetail.gravity}</td>
          </tr>
          <tr>
            <td>length of day:</td>
            <td>{this.props.singlePlanetDetail.length_of_day}</td>
          </tr>
          <tr>
            <td>mean temperature: </td>
            <td>{this.props.singlePlanetDetail.mean_temperature}</td>
          </tr>
          <tr>
            <td>mass:</td>
            <td>{this.props.singlePlanetDetail.mass}</td>
          </tr>
          <tr>
            <td>number of moons:</td>
            <td>{this.props.singlePlanetDetail.number_of_moons} </td>
          </tr>
          <tr>
            <td>orbital period:</td>
            <td>{this.props.singlePlanetDetail.orbital_period}</td>
          </tr>
        </table>
        <button onClick= {(e)=> {this.props.handleDetailClick()}} type="button">Finished Reading!</button>
      </div>
    );
  }
}

export default PlanetDetail;
