import React from 'react'
import { moneyFormatter } from '../../utils/extra_utils'

export default class SnackOrderItem extends React.Component {
  constructor(props) {
    super(props)
    const { cartItems, snack, sessionId } = this.props
    this.filteredCart = cartItems ? cartItems.filter(item => item.snackId === snack.id) : []
    this.originalQuantity = this.filteredCart.length ? this.filteredCart[0].quantity : 0
    this.state = {
      snackId: snack.id,
      userId: sessionId,
      orderId: null,
      quantity: this.originalQuantity
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.history !== this.props.history) this.setState({quantity: 10})
  // }

  handleQuantity = e => {
    this.setState({quantity: e.target.value})
  }

  handleSubmit = e => {
    const { createCartItem, updateCartItem, deleteCartItem, addRecentItem } = this.props
    if (this.originalQuantity === parseInt(this.state.quantity)) {
      this.props.history.push({pathname: '/cart'})
      return
    }
    if (!this.originalQuantity) {
      createCartItem(this.state)
    } else {
      let originalId = this.filteredCart[0].id
      if (!parseInt(this.state.quantity)) {
        deleteCartItem(originalId)
      } else {
        updateCartItem(Object.assign({}, this.state, {id: originalId}))
      }
    }
    addRecentItem(this.state)
    this.props.history.push({pathname: '/cart'})
  }

  render() {
    const { price, id } = this.props.snack
    const { cartItems } = this.props
    let filteredCart = cartItems ? cartItems.filter(item => item.snackId === id) : []
    let quantity = filteredCart.length ? filteredCart[0].quantity : 0
    return (
      <div className='snack-order-item-main-div'>
        <p className='snack-order-price'>{moneyFormatter.format(this.state.quantity * price / 100)}</p>
        <p className='snack-order-delivery'>{`FREE 24-hour delivery &`}</p>
        <p className='snack-order-returns'>FREE returns</p>
        <p className='snack-order-availability'>In Stock</p>
        <div className='snack-order-quantity-div'>
          <p className='snack-order-quantity-text'>Qty: </p>
          <select className='snack-order-quantity-select' defaultValue={this.state.quantity} onChange={this.handleQuantity}>
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
        </div>
        <div className='snack-order-button' onClick={this.handleSubmit} to='/cart' >{this.originalQuantity ? 'Edit order' : 'Add to cart'}</div>
        <div className='snack-order-secure'><img className='snack-order-secure-img' src="/images/secure.png" />Secure transaction</div>
        <div className='snack-order-ship-sell-text'>Ships from <p className='snack-order-shipper'>AmanomFresh</p></div>
        <div className='snack-order-ship-sell-text'>Sold by <p className='snack-order-seller'>AmanomFresh</p></div>
      </div>
    )
  }
}
