import React from 'react'

export default class SnackReview extends React.Component {
  render() {
    const { review } = this.props
    return (
      <div className='review-main-div'>
        <p className='review-title'>{review.title}</p>
        <p className='review-body'>{review.body}</p>
        <div className='review-sub-div'>
          <p className='review-datetime'>{review.updatedAt}</p>
          <p className='review-username'>{review.username}</p>
        </div>
      </div>
    )
  }
}
