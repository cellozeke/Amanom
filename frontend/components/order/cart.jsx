import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import CartItem from './cart_item'
import SnackOrderConfirm from '../snack/snack_order_confirm'

export default class Cart extends React.Component {
  componentWillUnmount() {
    this.props.refreshItems()
  }

  render() {
    const { currentUser, cartItems, cartPrices, updateCartItem, deleteCartItem, isCartDataReady, getCartChange } = this.props
    if (!isCartDataReady) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )

    let subTotal = 0
    if (cartItems) subTotal = cartPrices.reduce((a, b) => a + b, 0)

    return (
      <div className='cart-main-div'>
        {!currentUser ?
          <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/login'>log in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your cart.</p>
          :
          cartItems.length ?
            <div className='cart-has-items-div'>
              <div className='cart-cart-items'>
                <p className='cart-text-main'>Shopping Cart</p>
                <p className='cart-text-price'>Price</p>
                {cartItems.map((item, idx) => <CartItem key={item.id} item={item} itemSubtotal={cartPrices[idx]} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />)}
              </div>
              <div className='cart-aside'>
                <div className='cart-checkout-div'>
                  <div className='cart-checkout-subtotal'>
                    <p className='cart-checkout-subtotal-text'>Subtotal ({cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}): </p>
                    <p className='cart-checkout-subtotal-amount'>{moneyFormatter.format(subTotal / 100)}</p>
                  </div>
                  <div className='cart-checkout-button'>Proceed to checkout</div>
                </div>
                <SnackOrderConfirm getCartChange={getCartChange} />
              </div>
            </div>
            :
            <div className='cart-empty-message'>Your Amanom Cart is empty.</div>
        }
      </div>
    )
  }
}
