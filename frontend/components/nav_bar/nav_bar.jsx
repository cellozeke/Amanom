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
        <div className='nav-left'>
          <Link className='nav-logo-button nav-sub' to='/' >
            <img className='nav-logo' src="images/amanom-logo.png"/>
          </Link>
          <div className='nav-greeting-div nav-sub'>
            <p className='nav-text-normal'>{currentUser ? 'Hello,' : 'Welcome,'}</p>
            <p className='nav-text-bold'>{currentUser ? currentUser.username : 'Guest'}</p>
          </div>
        </div>

        <div className='nav-center'>

        </div>

        <div className='nav-right'>
          {currentUser ?
            <div className='nav-profile-div nav-sub'>
              <p className='nav-text-normal'>{'Reviews &'}</p>
              <p className='nav-text-bold'>Orders</p>
            </div>
            :
            <Link className='nav-sign-up-div nav-sub nav-text-bold' to='/signup'>Sign Up</Link>
          }
          {currentUser ?
            <div className='nav-log-out-div nav-sub nav-text-bold' onClick={this.logOut}>Log Out</div>
            :
            <Link className='nav-log-in-div nav-sub nav-text-bold' to='/login'>Log In</Link>
          }
          <div className='nav-cart-div nav-sub'>
            <img className='nav-cart-img' src="images/amanom-cart.png"/>
          </div>
        </div>
        
      </div>
    )
  }
}
