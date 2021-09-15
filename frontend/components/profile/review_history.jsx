import React from 'react'

export default class ReviewHistory extends React.Component {
  render() {
    return (
      <div>
        {this.props.reviews.map(review => review.id)}
      </div>
    )
  }
}
