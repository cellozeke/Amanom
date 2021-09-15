import React from 'react'

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

    return (
      <div className='order-history-main-div'>
        <select className='order-history-select' onChange={this.handleChange}>
          {orders.map(order =>
            <option className='order-history-select-option' key={order.id} value={order.id}>
              {new Date(order.createdAt).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
            </option>
          )}
        </select>
        <div className='order-history-order'>
          <p>{new Date(order.createdAt).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
          {order.orderItems.map(orderItem =>
            <div className='order-history-order-item' key={orderItem.id}>
              {orderItem.quantity}
            </div>
          )}
        </div>
      </div>
    )
  }
}
