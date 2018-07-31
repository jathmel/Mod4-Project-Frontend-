import React from 'react'
import '../LoginSignup.css';

const SignUp = (props) => {
    return(
      <form className="form" onSubmit={(e) => props.handleSignUp(e, props.username, props.password, props.name)}>
        <input type="txt" value={props.name} placeholder='Name' onChange={props.updateName}/><br/>
        <input type="txt" value={props.username}placeholder='Username' onChange={props.updateUsername}/><br/>
        <input type="password" value={props.password} placeholder='Password' onChange={props.updatePassword}/><br/>
        <input type="password" placeholder='Password Conformation'/><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
}
export default SignUp
