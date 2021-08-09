import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import CartItem from '../item/cart_item'

export default class Cart extends React.Component {
  // componentDidMount() {
  //   console.log('hi')
  //   // this.props.refreshCart()
  // }
  // componentWillUnmount() {
  //   console.log('hi')
  //   this.props.refreshCart()
  // }

  render() {
    const { currentUser, cartItems, updateCartItem, deleteCartItem, isCartDataReady } = this.props
    let subTotal = 0
    if (cartItems) subTotal = cartItems.map(item => item.quantity * item.snack.price).reduce((a, b) => a + b, 0)
    if (!isCartDataReady) return (<div>Spinner</div>)
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
                {cartItems.map(item => <CartItem key={item.id} item={item} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />)}
              </div>
              <div className='cart-checkout-div'>
                <div className='cart-checkout-subtotal'>
                  <p className='cart-checkout-subtotal-text'>Subtotal ({cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}): </p>
                  <p className='cart-checkout-subtotal-amount'>{moneyFormatter.format(subTotal / 100)}</p>
                </div>
                <div className='cart-checkout-button'>Proceed to checkout</div>
              </div>
            </div>
            :
            <div>
              <p>Your Amanom Cart is empty.</p>
            </div>
        }
      </div>
    )
  }
}
