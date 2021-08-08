import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  logOut = () => {
    this.props.logOut()
    this.props.history.push({pathname: '/'})
  }
  
  render() {
    const { currentUser, cartItems } = this.props
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
          <Link className='nav-cart-link nav-sub' to='/cart'>
            <div className='nav-cart-combo'>
              <img className='nav-cart-img' src="images/amanom-cart.png"/>
              {!currentUser ? <p className='nav-cart-number'>{'0'}</p> : cartItems.length > 9 ? <p className='nav-cart-number nav-cart-big'>{'9+'}</p> : <p className='nav-cart-number'>{cartItems.length}</p>}
            </div>
            <p className='nav-cart-text nav-text-bold'>Cart</p>
          </Link>
        </div>
        
      </div>
    )
  }
}
