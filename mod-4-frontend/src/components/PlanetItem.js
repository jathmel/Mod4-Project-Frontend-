import React, { Component } from 'react';
import '../PlanetItem.css';
class PlanetItem extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}>
         <img  src={require(`../media/${this.props.planet.name.toLowerCase()}.jpg`)} alt='nothing' width="100" height="100"/>


      </div>
    );
  }
}

export default PlanetItem;
