import React from 'react'
import SnackReview from './snack_review'
import SnackReviewForm from './snack_review_form'

export default class SnackReviews extends React.Component {
  render() {
    const { snack, canReview, currentUser, snackId, createSnackReview, fetchSnack } = this.props
    if (!snack.reviews) return null
    let reviews = [...snack.reviews].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    let stars = [5, 4, 3, 2, 1]
    let percent = star => Math.round(reviews.filter(review => review.stars === star).length / snack.numReviews * 100)
    const css = starPercent => {
      if (starPercent === 100) return (
        <div className='snack-show-reviews-star-bar-fill'
          style={{width: `200px`, border: `1px solid #DE7921`, borderRadius: `5px`}}>
        </div>
      )
      if (starPercent === 0) return (
        <div className='snack-show-reviews-star-bar-fill'
          style={{width: `0`}}>
        </div>
      )
      return (
        <div className='snack-show-reviews-star-bar-fill'
          style={{width: `${starPercent}%`, border: `1px solid #DE7921`}}>
        </div>
      )
    }
    const mappedCss = stars.map(star => 
      <div className='snack-show-reviews-star-details' key={star}>
      <p className='snack-show-reviews-star-text'>{star} star</p>
      <div className='snack-show-reviews-star-bar'>
        {css(percent(star))}
      </div>
      <p className='snack-show-reviews-star-text snack-show-reviews-star-percent'>{percent(star)}%</p>
    </div>
    )
    return (
      <div className='snack-show-reviews-main-div'>
        <div className='snack-show-reviews-sidebar'>
          <p className='snack-show-reviews-sidebar-headline'>Customer reviews</p>
          {snack.numReviews ? 
          <div>
            <div className='snack-show-reviews-stars stars big-stars' style={{'--rating': `2.3`}} ><p className='snack-show-reviews-stars-out-of'>{snack.rating} out of 5</p></div>
            <p className='snack-show-reviews-star-num-ratings'>{snack.numReviews} global ratings</p>
            <div className='snack-show-reviews-star-details-div'>
              {mappedCss}
            </div>
          </div>
          :
          <p className='snack-show-reviews-none'>No reviews yet</p>
          }
        </div>
        <div className='snack-show-reviews-div'>
          <SnackReviewForm canReview={canReview} currentUser={currentUser} snackId={snackId} createSnackReview={createSnackReview} fetchSnack={fetchSnack}/>
          <div className='snack-show-reviews-subdiv'>
            {reviews.map(review => <SnackReview key={review.id} review={review} />)}
          </div>
        </div>
      </div>
    )
  }
}
