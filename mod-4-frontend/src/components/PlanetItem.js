import React, { Component } from 'react';
import '../PlanetItem.css';

class PlanetItem extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="PlanetItem" onClick={(e) => this.props.handlePlanetClick(this.props.planet)}>
         <img className="PlanetItem" id={this.props.planet.name} src={require(`../media/${this.props.planet.name}.gif`)} alt='nothing' />


      </div>
    );
  }
}

export default PlanetItem;
