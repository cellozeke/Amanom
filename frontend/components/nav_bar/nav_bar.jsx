import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  logOut = () => {
    this.props.logOut()
    this.props.history.push({pathname: '/'})
  }
  
  render() {
    const { currentUser } = this.props
    return (
      <div className='nav-bar'>
        <img src="images/amanom-logo.png" className='nav-logo' />
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        {/* <h2>Welcome, {currentUser.username}!</h2>
       <button onClick={this.logOut}>Log Out</button> */}
      </div>
    )
  }
}
