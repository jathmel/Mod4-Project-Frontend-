import React, { Component } from 'react';
import '../PlanetItem.css';



class PlanetItem extends Component {



  showItemPage = () => {
    console.log(this.props.isHovered)
    if (this.props.isHovered) {
      return (
        <p style={{color:"white"}}>{this.props.planet.name}</p>
      )

    }
  }


  render() {
    return (
        <div  className="PlanetItem"
        onClick={(e) => this.props.handlePlanetClick(this.props.planet)}
        onMouseOver={(e) => this.props.handlePlanetHover(this.props.planet) } >
          <img id={this.props.planet.name} src={require(`../media/${this.props.planet.name}.gif`)} alt='nothing'/>
          {this.showItemPage()}
       </div>

    );
  }
}

export default PlanetItem;

// onMouseOver={this.showItemPage(); (e) => this.props.handlePlanetHover(this.props.planet)}

{/* <p style={{color:"black"}}>{this.props.planet.name}</p> */}
