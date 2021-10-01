import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: this.props.orders[0]
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({order: this.props.orders.find(order => order.id === parseInt(e.target.value))})
  }

  render() {
    let { orders } = this.props
    let { order } = this.state

    if (!orders.length) return (
      <div className='order-history-empty'>
        No past orders
      </div>
    )

    let subTotals = order.orderItems.map(orderItem => orderItem.snack.price * orderItem.quantity)
    let total = subTotals.reduce((a, b) => a + b, 0)
    
    return (
      <div className='order-history-main-div'>
        <div className='order-history-select-menu'>
          <FormControl fullWidth>
            <Select
              value={order.id}
              onChange={this.handleChange}
              sx={{height: 30}}
            >
              {orders.map(order =>
                <MenuItem className='order-history-select-option' key={order.id} value={order.id}>
                  {new Date(order.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        {/* <select className='order-history-select' defaultValue={orders[0].id} onChange={this.handleChange}>
          {orders.map(order =>
            <option className='order-history-select-option' key={order.id} value={order.id}>
              {new Date(order.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
            </option>
          )}
        </select> */}
        <div className='order-history-order'>
          {/* <p>{new Date(order.createdAt).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p> */}
          {order.orderItems.map((orderItem, idx) =>
            <div className='order-history-order-item' key={orderItem.id}>
              <div className='order-history-order-item-subdiv'>
                <Link className='order-history-order-item-link' to={`/snacks/${orderItem.snack.id}`}>
                  <img className='order-history-order-item-img' src={orderItem.photoUrl} />
                </Link>
                <div className='order-history-order-item-info'>
                  <Link className='order-history-order-item-name' to={`/snacks/${orderItem.snack.id}`}>{orderItem.snack.name}</Link>
                  <div className='order-history-order-item-rating stars' style={{'--rating': `${orderItem.snack.rating}`}} ></div>
                  <p className='order-history-order-item-price'>{moneyFormatter.format(orderItem.snack.price / 100)}</p>
                  <p>Qty: {orderItem.quantity}</p>
                </div>
              </div>
              <p className='order-history-order-item-subtotal'>{moneyFormatter.format(subTotals[idx] / 100)}</p>
            </div>
          )}
          <div className='order-history-order-total'>
            <p className='order-history-order-total-text'>Total:</p>
            <p>{moneyFormatter.format(total / 100)}</p>
          </div>
        </div>
      </div>
    )
  }
}
