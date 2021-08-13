import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import CartItem from './cart_item'

export default class Cart extends React.Component {
  componentWillUnmount() {
    this.props.refreshCartItems()
  }

  handleSubmit = e => {
    alert('Thanks for checking out Amanom! Order submission not available at this time')
  }

  render() {
    const { currentUser, cartItems, isCartDataReady, updateCartItem, deleteCartItem } = this.props

    if (!isCartDataReady && currentUser) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )

    let subTotal = cartItems.prices.reduce((a, b) => a + b, 0)
    return (
      <div className='cart-main-div'>
        {!currentUser ?
          <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/login'>log in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your cart.</p>
          :
          cartItems.items.length ?
            <div className='cart-has-items-div'>
              <div className='cart-cart-items'>
                <p className='cart-text-main'>Shopping Cart</p>
                <p className='cart-text-price'>Price</p>
                {cartItems.items.map((item, idx) => <CartItem key={item.id} item={item} itemSubtotal={cartItems.prices[idx]} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />)}
              </div>
              <div className='cart-aside'>
                <div className='cart-checkout-div'>
                  <div className='cart-checkout-subtotal'>
                    <p className='cart-checkout-subtotal-text'>Subtotal ({cartItems.items.length} {cartItems.items.length > 1 ? 'items' : 'item'}): </p>
                    <p className='cart-checkout-subtotal-amount'>{moneyFormatter.format(subTotal / 100)}</p>
                  </div>
                  <div className='cart-checkout-button' onClick={this.handleSubmit}>Proceed to checkout</div>
                </div>
              </div>
            </div>
            :
            <div className='cart-empty-message'>Your Amanom Cart is empty.</div>
        }
      </div>
    )
  }
}
