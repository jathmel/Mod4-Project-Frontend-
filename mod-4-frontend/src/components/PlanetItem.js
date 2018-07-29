import React, { Component } from 'react';
import '../PlanetItem.css';
import HoverName from './HoverName'

class PlanetItem extends Component {

  render() {

    return (
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}
        hoverName={this.props.hoverName}>

         <img  src={require(`../media/${this.props.planet.name.toLowerCase()}.jpg`)} alt='nothing' width="100" height="100"/>

      </div>
    );
  }
}

export default PlanetItem;
