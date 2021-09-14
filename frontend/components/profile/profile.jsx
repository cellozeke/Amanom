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

  render() {
    if (!this.props.currentUser) return (
      <div className='cart-main-div'>
        <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/login'>log in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your profile.</p>
      </div>
    )

    let userInfo = 
      <div>
        <p>^(oo)^</p>
        <p>{this.props.currentUser.username}</p>
        <p>Amanom member since {new Date(this.props.currentUser.createdAt).toLocaleDateString("en-US")}</p>
      </div>

    if (this.state.tab === 'orders') return (
      <div>
        {userInfo}
        <OrderHistory />
      </div>
    )
    return (
      <div>
        {userInfo}
        <ReviewHistory />
      </div>
    )
  }
}
