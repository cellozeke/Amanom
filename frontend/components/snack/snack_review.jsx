import React from 'react'

export default class SnackReview extends React.Component {
  render() {
    const { review } = this.props
    return (
      <div className='review-main-div'>
        <div className='review-avatar-name'>
          <div className='review-avatar-div'>
            <img className='review-avatar' src="images/pig-avatar.png" />
          </div>
          <p className='review-name'>{review.username}</p>
        </div>
        <div className='review-info'>
          <div className='review-header'>
            <p className='review-title'>{review.title}</p>
            <p className='review-datetime'>{new Date(review.updatedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
          </div>
          <p className='review-rating'>insert stars here</p>
          <p className='review-body'>{review.body}</p>
          <div className='review-sub-div'>
          </div>
        </div>
      </div>
    )
  }
}
