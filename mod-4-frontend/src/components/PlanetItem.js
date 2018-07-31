import React, { Component } from 'react';
import '../PlanetItem.css';



class PlanetItem extends Component {


  showItemPage = () => {
    console.log(this.props.isHovered)
    if (this.props.isHovered) {
      return (
        <p className="planetName" style={{color:"white"}}>{this.props.planet.name}</p>
      )
    }
  }
  size = (name) => {
  const sizes = {
      Mercury: "25px",
      Venus: "60px",
      Earth: "100px",
      Moon: "5px",
      Mars: "45px",
      Jupiter: "120px",
      Saturn: "110px",
      Uranus: "60px",
      Neptune: "50px",
      Pluto: "15px"
    }
    return sizes[name]
  }


  render() {
    return (
        <div id ={this.props.planet.name} className="PlanetItem"
        onClick={(e) => this.props.handlePlanetClick(this.props.planet)}
        onMouseOver={(e) => this.props.handlePlanetHover(this.props.planet) } >
          {this.showItemPage()}
          <img style={{width:this.size(this.props.planet.name), height:this.size(this.props.planet.name)}} src={require(`../media/${this.props.planet.name}.png`)} alt='nothing'/>
       </div>


    );
  }
}

export default PlanetItem;

// onMouseOver={this.showItemPage(); (e) => this.props.handlePlanetHover(this.props.planet)}

{/* <p style={{color:"black"}}>{this.props.planet.name}</p> */}
