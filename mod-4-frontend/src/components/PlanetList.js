import React, {
  Component
} from 'react';
import PlanetItem from './PlanetItem'

class PlanetList extends Component {
  renderPlanets = () => {
    return this.props.planets.map(planet => <PlanetItem planet={planet} key={planet.id} handlePlanetClick={this.props.handlePlanetClick} />)
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
