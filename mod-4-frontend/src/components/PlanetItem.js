import React, { Component } from 'react';
import '../PlanetItem.css';
import HoverName from './HoverName'


class PlanetItem extends Component {

  render() {

    return (
// <<<<<<< HEAD
//       <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}
//         hoverName={this.props.hoverName}>
// =======
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}>
         <img className="PlanetItem" id={this.props.planet.name} src={require(`../media/${this.props.planet.name}.gif`)} alt='nothing' />
      </div>
    );
  }
}

export default PlanetItem;
