import React from 'react'
import { Link } from 'react-router-dom'

export default class ReviewHistory extends React.Component {
  render() {
    let { reviews } = this.props

    if (!reviews.length) return (
      <div className='review-history-empty'>
        No reviews
      </div>
    )

    return (
      <div className='review-history-main-div'>
        {reviews.map((review, idx) =>
          <div className='review-history-review' key={idx}>
            <Link className='review-history-review-link' to={`/snacks/${review.snackId}`}>
              <img className='review-history-review-img' src={review.photoUrl} />
            </Link>
            <div className='review-history-review-info'>
              <Link className='review-history-review-name' to={`/snacks/${review.snackId}`}>{review.snackName}</Link>
              <div className='stars' style={{'--rating': `${review.stars}`}} ></div>
              <p>{review.title}</p>
              <p>{review.body}</p>
              <p>{review.updatedAt}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
