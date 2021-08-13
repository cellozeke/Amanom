import React from 'react'
import SnackReview from './snack_review'

export default class SnackReviews extends React.Component {
  render() {
    const { snack, reviews } = this.props
    if (!reviews) return null
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
      <p className='snack-show-reviews-star-text'>{percent(star)}%</p>
    </div>
    )
    return (
      <div className='snack-show-reviews-main-div'>
        <div className='snack-show-reviews-sidebar'>
          <p className='snack-show-reviews-sidebar-headline'>Customer reviews</p>
          {snack.numReviews ? 
          <div>
            <div className='snack-show-reviews-stars'>(insert {snack.rating} stars here) <p className='snack-show-reviews-stars-out-of'>{snack.rating} out of 5</p></div>
            <p className='snack-show-reviews-star-num-ratings'>{snack.numReviews} global ratings</p>
            <div className='snack-show-reviews-star-details-div'>
              {mappedCss}
            </div>
          </div>
          :
          <p className='snack-show-reviews-none'>No reviews yet</p>
          }
        </div>
        
        <div className='temp-reviews'>
          {reviews.map(review => <SnackReview key={review.id} review={review} />)}
          {/* {reviews.map(review => <p className='temp-review' key={review.id}>{[review.title, review.body, review.username]}</p>)} */}
        </div>
      </div>
    )
  }
}
