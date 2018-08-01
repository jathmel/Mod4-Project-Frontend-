import React, { Component } from 'react'

class UserProfile extends Component {
  state = {
    myPlanets: []
  }
  componentDidMount = () => {
    const user = this.props.currentUser
    fetch(`http://localhost:4000/api/v1/myplanets/${user.username}`)
    .then(res => res.json()).then(console.log)
    // .then(data => {
    //   console.log(data)
    //   this.setState({
    //     myPlanets: data
    //   })
    // })
  }

  displayMyPlanets = () => {
    console.log(this.state.myPlanets)
  }
  render(){
    return(
      <div>
        {this.displayMyPlanets()}
      </div>
    )
  }
}

export default UserProfile
