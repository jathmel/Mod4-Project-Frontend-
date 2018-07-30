import React, { Components } from 'react'

const LogIn = (props) => {
  console.log(props)
    return(
      <form onSubmit={(e) => props.handleSubmit(e, props.username, props.password)}>
        <input type="text" value={props.username} placeholder='username' onChange={props.updateUsername}/><br/>
        <input type="password" value={props.password} placeholder='Password' onChange={props.updatePassword}/><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
}
export default LogIn
