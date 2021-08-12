import React from 'react'

export default class SnackReviews extends React.Component {
  render() {
    const { reviews } = this.props
    if (!reviews) return null
    return (
      <div>
        {reviews.map(review => review.title)}
      </div>
    )
  }
}
