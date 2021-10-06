import React from 'react'
import { Link } from 'react-router-dom'

export default class ReviewHistory extends React.Component {
  render() {
    let { reviews } = this.props

    reviews = [...reviews].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

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
              {/* <div className='review-history-review-subdiv'>
              </div> */}
              <p className='review-history-review-title'>{review.title}</p>
              <div className='review-history-review-stars stars' style={{'--rating': `${review.stars}`}} ></div>
              <p className='review-history-review-body'>{review.body}</p>
              <p className='review-history-review-date'>{new Date(review.updatedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
