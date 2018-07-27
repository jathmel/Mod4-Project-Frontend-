import React, {
  Component
} from 'react';

class PlanetItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="PlanetItem">
         <img src={this.props.planet.img_url} />

      </div>
    );
  }
}

export default PlanetItem;
