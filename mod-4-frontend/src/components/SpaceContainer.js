import React, { Component } from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail'
import NavBar from './NavBar'
class SpaceContainer extends Component {

  state = {
    currentUser: this.props.currentUser,
    planets: [],
    singlePlanetDetail: '',
    showSinglePlanet: false,
    hoverName: '',
    isHovered: false,
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/planets')
      .then(r => r.json())
      .then((data) => {
        this.setState({
          planets: data
        })
      })
  }

  handlePlanetClick = (planet) => {
    this.setState({
      singlePlanetDetail: planet,
      showSinglePlanet: !this.state.showSinglePlanet
    })
  }

  // showPlanetName = () => {
  //   const planetNameArr=["Earth", "Mars", "Venus", "Jupiter", "Uranus", "Saturn", "Neptune", "Mercury"]
  //   if (this.state.hoverName.includes(planetNameArr) ) {
  //     return (console.log("hiiiiiii"))
  //   }
  // }



  handleDetailClick = () => {
    console.log(this.state.currentUser, this.state.singlePlanetDetail.id);
    const progress = {user_id: this.state.currentUser.username, planet_id: this.state.singlePlanetDetail.id}
    fetch('http://localhost:4000/api/v1/progresses', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({progress: progress})
    }).then(
    this.setState({
      showSinglePlanet: !this.state.showSinglePlanet
    }))
  }

  handleMouseOut = () => {
    this.setState({
      hoverName: '',
      // isHovered: !this.state.isHovered
    })
  }

  handlePlanetHover = (planet) => {
      this.setState({
        isHovered: !this.state.isHovered
      })
    }

  showPage () {
    if (this.state.showSinglePlanet) {
      return (
        <PlanetDetail handleDetailClick={this.handleDetailClick} singlePlanetDetail={this.state.singlePlanetDetail} />
      )
    } else {
      return (
        <PlanetList planets={this.state.planets} handlePlanetClick={this.handlePlanetClick} hoverName={this.state.hoverName}
        handlePlanetHover={this.handlePlanetHover} isHovered={this.state.isHovered}/>
      )
    }
  }


  render() {
    return (
      <div className="SpaceContainer" style={{height:"100%"}} onMouseOver={this.handleMouseOut}>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/profile" render={() => {
              return <UserProfile currentUser={this.state.currentUser}/>
            }}/>
          <Route path="/Dashboard" render={() => {
              return <PlanetList />
            }}/>
          <Route path="/login" render={() => {
              return <UserProfile currentUser={this.state.currentUser}/>
            }}/>
        </Switch>
        {this.showPage()}
      </div>
    );
  }
}

export default SpaceContainer;
