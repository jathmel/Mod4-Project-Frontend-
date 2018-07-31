import React, { Component } from 'react';
import '../PlanetItem.css';
import HoverName from './HoverName'


class PlanetItem extends Component {


  render() {
    return (
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)} onMouseOver={(e) => this.props.handlePlanetHover(this.props.planet)}>
         <img id={this.props.planet.name} src={require(`../media/${this.props.planet.name}.png`)} alt='nothing' />

      </div>
    );
  }
}

export default PlanetItem;
