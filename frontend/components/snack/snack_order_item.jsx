import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'

export default class SnackOrderItem extends React.Component {
  handleQuantity = e => {
    const { cartItem, createCartItem, updateCartItem, deleteCartItem } = this.props
    let originalQuantity = cartItem.originalQuantity
    let newQuantity = parseInt(e.target.value)
    let nextState = Object.assign(cartItem.matchingItem, {quantity: newQuantity})

    if (!originalQuantity && newQuantity) {
      createCartItem(nextState)
      return
    }

    if (originalQuantity && !newQuantity) {
      deleteCartItem(cartItem.id)
      return
    }

    if (originalQuantity && newQuantity) {
      updateCartItem(nextState)
      return
    }
  }

  render() {
    const { cartItem, currentUser } = this.props
    const { price } = this.props.snack
    return (
      <div className='snack-order-item-main-div'>
        <p className='snack-order-price'>{moneyFormatter.format(cartItem.matchingItem.quantity * price / 100)}</p>
        <p className='snack-order-delivery'>{`FREE 24-hour delivery &`}</p>
        <p className='snack-order-returns'>FREE returns</p>
        <p className='snack-order-availability'>In Stock</p>
        {currentUser ? <div className='snack-order-quantity-div'>
          <p className='snack-order-quantity-text'>Qty: </p>
          <select className='snack-order-quantity-select' value={cartItem.matchingItem.quantity} onChange={this.handleQuantity}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div> : <div></div>}
        <Link className='snack-order-button' to='/cart' >Go to cart</Link>
        <div className='snack-order-secure'><img className='snack-order-secure-img' src="/images/secure.png" />Secure transaction</div>
        <div className='snack-order-ship-sell-text'>Ships from <p className='snack-order-shipper'>AmanomFresh</p></div>
        <div className='snack-order-ship-sell-text'>Sold by <p className='snack-order-seller'>AmanomFresh</p></div>
      </div>
    )
  }
}
