import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../item/cart_item'

export default class Cart extends React.Component {
  render() {
    const { currentUser, cartItems } = this.props
    return (
      <div className='cart-main-div'>
        {!currentUser ?
          <div>
            <p>Please <Link to='/login'>log in</Link> or <Link to='/signup'>sign up</Link> to view your cart.</p>
          </div>
          :
          cartItems.length ?
            <div className='cart-has-items-div'>
              <div className='cart-cart-items'>
                <p className='cart-text-main'>Shopping Cart</p>
                <p className='cart-text-price'>Price</p>
                {cartItems.map(item => <CartItem key={item.id} item={item} />)}
              </div>
              <div className='cart-checkout-div'></div>
            </div>
            :
            <div>
              <p>Your Amanom Cart is empty.</p>
            </div>
        }
      </div>
    )
    return null
  }
}
