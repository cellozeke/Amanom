import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default class SnackOrderItem extends React.Component {
  handleQuantity = e => {
    const { cartItem, createCartItem, updateCartItem, deleteCartItem, refreshCartItems } = this.props
    let originalQuantity = cartItem.originalQuantity
    let newQuantity = parseInt(e.target.value)
    let nextState = Object.assign(cartItem.matchingItem, {quantity: newQuantity})
    if (!originalQuantity && newQuantity) {
      createCartItem(nextState)
    }
    if (originalQuantity && !newQuantity) {
      deleteCartItem(cartItem.id)
    }
    if (originalQuantity && newQuantity) {
      updateCartItem(nextState)
    }
    refreshCartItems()
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
          <FormControl >
            <Select
              value={cartItem.matchingItem.quantity}
              onChange={this.handleQuantity}
              sx={{height: 24, width: 56, fontSize: 14, padding: 0}}
            >
              {[...Array(11).keys()].map(quantity =>
                <MenuItem key={quantity} value={quantity}> {quantity} </MenuItem>
              )}
            </Select>
          </FormControl>
        </div> : null}
        <Link className='button' to='/cart' >Go to cart</Link>
        <div className='snack-order-secure'><img className='snack-order-secure-img' src="/images/secure.png" />Secure transaction</div>
        <div className='snack-order-ship-sell-text'>Ships from <p className='snack-order-shipper'>AmanomFresh</p></div>
        <div className='snack-order-ship-sell-text'>Sold by <p className='snack-order-seller'>AmanomFresh</p></div>
      </div>
    )
  }
}
