import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  logOut = () => {
    this.props.logOut()
    this.props.history.push({pathname: '/'})
  }
  
  render() {
    const { currentUser } = this.props
    if (currentUser) return (
     <div>
       <h2>Welcome, {currentUser.username}!</h2>
       <button onClick={this.logOut}>Log Out</button>
     </div> 
    )
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}
