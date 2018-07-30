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

  getImageSize() {
    const sizes = [25,60,100,5,45,120,110,60,50,15]
    let width =''
    let i;

    // for (let i=0; i<sizes.length; i++)
    if (i === 0) {
      sizes.forEach((size)=>{
        width=(size+"px").toString()
        console.log(width)
        return (<img style={{width:width, height:width}} src={require(`../media/${this.props.planet.name}.png`)} alt='nothing'/>)
      })
    }
    i++
  }


  render() {
    return (
        <div id ={this.props.planet.name} className="PlanetItem"
        onClick={(e) => this.props.handlePlanetClick(this.props.planet)}
        onMouseOver={(e) => this.props.handlePlanetHover(this.props.planet) } >
          {this.getImageSize()}
          {this.showItemPage()}
       </div>


    );
  }
}

export default PlanetItem;

// onMouseOver={this.showItemPage(); (e) => this.props.handlePlanetHover(this.props.planet)}

{/* <p style={{color:"black"}}>{this.props.planet.name}</p> */}
