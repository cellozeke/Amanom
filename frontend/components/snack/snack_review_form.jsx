import React from 'react'

export default class SnackReviewForm extends React.Component {
  render() {
    let { canReview } = this.props
    return (
      <div>
        <p>{canReview ? 'hi' : 'bye'}</p>
      </div>
    )
  }
}
