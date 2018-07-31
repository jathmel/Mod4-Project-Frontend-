import React, { Components } from 'react'
import '../LoginSignup.css';

const LogIn = (props) => {
  console.log(props)
    return(
      <form className="form-group" onSubmit={(e) => props.handleLogIn(e, props.username, props.password)}>
        <input id="dynamic-label-imput" type="text" value={props.username} placeholder='Username' onChange={props.updateUsername}/><br/>
        <label for="dynamic-label-input"></label>
        <input type="password" value={props.password} placeholder='Password' onChange={props.updatePassword}/><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
}
export default LogIn
