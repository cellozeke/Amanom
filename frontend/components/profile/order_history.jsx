import React from 'react'

export default class OrderHistory extends React.Component {
  render() {
    return (
      <div>
        {this.props.orders.map(order => order.id)}
      </div>
    )
  }
}
