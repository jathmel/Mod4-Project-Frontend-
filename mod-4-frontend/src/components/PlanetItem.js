import React, { Component } from 'react';
import '../PlanetItem.css';

class PlanetItem extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}>
         <img className="IndivPlanetItem" src={require(`../media/${this.props.planet.name.toLowerCase()}.png`)} alt='nothing' />


      </div>
    );
  }
}

export default PlanetItem;
