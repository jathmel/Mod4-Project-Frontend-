import React, { Component } from 'react';
import LogIn from './Log-In'
import SignUp from './Sign-Up'
import '../LandingPage.css'


class LandingPage extends Component {

    state = {
      clicked: null,
      name: '',
      username: '',
      password: ''
    }

    updateName = (e) => {
      this.setState({ name: e.target.value}, () => console.log(this.state.name))
    }
    updateUsername = (e) => {
      this.setState({ username: e.target.value}, () => console.log(this.state.username))
    }
    updatePassword = (e) => {
      this.setState({ password: e.target.value}, () => console.log(this.state.password))
    }

    handleClick = (e) =>{
      this.setState({
        clicked: e.target.dataset.id
      })
    }
    logInForm = () => {
      return <LogIn handleLogIn={this.props.handleLogIn} username={this.state.username} password={this.state.password} updateUsername={this.updateUsername} updatePassword={this.updatePassword}/>
    }
    signUpForm = () => {
      return <SignUp handleSignUp={this.props.handleSignUp} name={this.state.name} updateName={this.updateName} username={this.state.username} updateUsername={this.updateUsername} updatePassword={this.updatePassword} password={this.state.password}/>
    }

  handleForm = (state) =>{
    if (state === 'login'){
      return this.logInForm()
    } else if (state === 'signup'){
      return this.signUpForm()
    }else{
      return null
    }
  }

  renderForm = () => {

    if (this.state.clicked){
      return this.handleForm(this.state.clicked)
    }else{
      return (
        <div>
          <button onClick={this.handleClick} data-id='login'>Login</button><br/>
          <button onClick={this.handleClick} data-id='signup'>SignUp</button>
        </div>
      )
    }
  }


  render(){
    return(
      <div className='container'>
        {this.renderForm()}
      </div>
    )
  }

}
export default LandingPage
