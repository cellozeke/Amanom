import React from 'react'
import OrderHistory from './order_history'
import ReviewHistory from './review_history'
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'orders'
    }
  }

  handleClick = tab => e => {
    e.preventDefault()
    this.setState({tab})
  }

  render() {
    let { currentUser, orders, reviews } = this.props
    if (!currentUser) return (
      <div className='cart-main-div'>
        <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/login'>log in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your profile.</p>
      </div>
    )

    if (!orders && currentUser) return (
      <div className='snack-show-spinner-div'>
      <img className='loading-indicator' src="/images/loadIndicator.gif" />
    </div>
    )

    let tabs = 
      <div className='profile-tab-buttons-div'>
        <p className={this.state.tab === 'orders' ? 'profile-selected-tab' : ''} onClick={this.handleClick('orders')}>Orders</p>
        <p className={this.state.tab === 'reviews' ? 'profile-selected-tab' : ''} onClick={this.handleClick('reviews')}>Reviews</p>
      </div>
    let userInfo = 
      <div className='profile-info-div'>
        <div className='profile-info-avatar-div'>
          <img className='profile-info-avatar' src="images/pig-avatar.png" />
        </div>
        <p className='profile-info-username'>{currentUser.username}</p>
        <div className='profile-info-divider'></div>
        <div className='profile-info-details'>
          <p>Member since {new Date(currentUser.createdAt).toLocaleDateString("en-US")}</p>
          <p>{orders.length} {orders.length === 1 ? 'order' : 'orders'}</p>
          <p>{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</p>
        </div>
      </div>

    return (
      <div className='profile-main-div'>
        {userInfo}
        <div className='profile-tabs-div'>
          {tabs}
          <div className='profile-tabs-divider'></div>
          {this.state.tab === 'orders' ? <OrderHistory orders={orders.slice().reverse()}/> : <ReviewHistory reviews={reviews}/>}
        </div>
      </div>
    )
  }
}
