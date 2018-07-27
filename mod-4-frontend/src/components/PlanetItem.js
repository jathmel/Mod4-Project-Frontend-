import React, {
  Component
} from 'react';

class PlanetItem extends Component {
  render() {
    return (
      <div className="PlanetItem">
         <h1> {this.props.planet.name} </h1>

      </div>
    );
  }
}

export default PlanetItem;