import React from 'react'

export default class SnackReviews extends React.Component {
  render() {
    const { snack, reviews } = this.props
    if (!reviews) return null
    console.log(reviews)
    return (
      <div className='snack-show-reviews-main-div'>
        <div className='snack-show-reviews-sidebar'>
          <p className='snack-show-reviews-sidebar-headline'>Customer reviews</p>
          <div className='snack-show-reviews-stars'>(insert {snack.rating / 10} stars here) <p className='snack-show-reviews-stars-out-of'>{snack.rating / 10} out of 5</p></div>
          <div className='snack-show-reviews-star-details'>
            <div className='snack-show-reviews-star-details-5'>
              <p>5 star</p>
              <div></div>
              {/* <p>{reviews}%</p> */}
            </div>
          </div>
          <p>{snack.numReviews} global ratings</p>
        </div>
        
        
        {reviews.map(review => review.title)}
      </div>
    )
  }
}
