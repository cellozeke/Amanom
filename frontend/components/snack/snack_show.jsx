import React from 'react'

export default class SnackShow extends React.Component {
  componentDidMount() {
    this.props.fetchSnack(this.props.match.params.snackId)
  }

  render() {
    const { snack } = this.props
    if (snack) return (
      <div className='snack-main-div'>
        <div className='snack-order-div'>
          <div className='snack-pic-div'></div>
          <div className='snack-details-div'></div>
          <div className='snack-order-div'></div>
        </div>
        {snack.id}
        {snack.name}
        {snack.description}
        {snack.price}
        {snack.rating || 0}
      </div>
    );
    return null
  }
}
