import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './search_bar'

export default class NavBar extends React.Component {
  logOut = () => {
    this.props.logOut()
    // this.props.history.push({pathname: '/'})
  }
  
  render() {
    const { currentUser, cartItems, isCartDataReady, history } = this.props
    const cartSize = cartItems.items.filter(item => item.quantity > 0).length
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
          <SearchBar history={history} />
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
            <div className='nav-log-out-div nav-sub' onClick={this.logOut}>
              {/* <p className='nav-text-normal'>Done shopping?</p> */}
              <p className='nav-text-bold'>Log Out</p>
            </div>
            :
            <Link className='nav-log-in-div nav-sub nav-text-bold' to='/login'>Log In</Link>
          }
          <Link className='nav-cart-link nav-sub' to='/cart'>
            <div className='nav-cart-combo'>
              <img className='nav-cart-img' src="images/amanom-cart.png"/>
              {!isCartDataReady || !currentUser ? <p className='nav-cart-number'></p> : cartSize > 9 ? <p className='nav-cart-number nav-cart-big'>{'9+'}</p> : <p className='nav-cart-number'>{cartSize}</p>}
            </div>
            <p className='nav-cart-text nav-text-bold'>Cart</p>
          </Link>
        </div>
        
      </div>
    )
  }
}
