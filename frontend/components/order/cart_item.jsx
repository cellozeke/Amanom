import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'

export default class CartItem extends React.Component {
  constructor(props) {
    super(props)
    const { item } = this.props
    this.state = {
      id: item.id,
      snackId: item.snackId,
      userId: item.userId,
      orderId: item.orderId,
      quantity: item.quantity
    }
  }

  handleQuantity = e => {
    this.setState({quantity: e.target.value})
    let nextState = Object.assign({}, this.state, {quantity: e.target.value})
    this.props.updateCartItem(nextState)
  }

  handleDelete = e => {
    this.setState({quantity: 0})
    this.props.deleteCartItem(this.props.item.id)
  }

  render() {
    const { item, itemSubtotal } = this.props
    if (this.state.quantity === 0) return (
      <div className='cart-item-deleted'>
        <p><Link className='cart-item-deleted-link' to={`snacks/${item.snack.id}`}>{item.snack.name}</Link> was removed from your Shopping Cart.</p>
      </div>
    )
    return (
      <div className='cart-item-div'>
        <div className='cart-item-img-div'>
          <Link className='cart-item-img-link' to={`/snacks/${item.snack.id}`}>
            <img className='cart-item-img' src={item.photoUrl} />
          </Link>
        </div>
        <div className='cart-item-info'>
          <Link className='cart-item-name' to={`/snacks/${item.snack.id}`}>{item.snack.name}</Link>
          <p className='cart-item-seller'>Sold by AmanomFresh</p>
          <div className='cart-item-stars'>(insert {item.snack.rating} stars here)</div>
          <p className='cart-item-unit-price'>{moneyFormatter.format(item.snack.price / 100)}</p>
          <p className='cart-item-availability'>In Stock</p>
          <div className='cart-item-quantity-div'>
            <p className='cart-item-quantity-text'>Qty: </p>
            <select className='cart-item-quantity-select' value={item.quantity} onChange={this.handleQuantity}>
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
          <p className='cart-item-delete' onClick={this.handleDelete}>Delete</p>
        </div>
        <p className='cart-item-price'>{moneyFormatter.format(itemSubtotal / 100)}</p>
      </div>
    )
  }
}
