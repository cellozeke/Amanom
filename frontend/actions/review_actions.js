import * as ReviewAPIUtils from '../utils/review_utils'

export const RECEIVE_SNACK_REVIEW = 'RECEIVE_SNACK_REVIEW'
export const RECEIVE_SNACK_REVIEWS = 'RECEIVE_SNACK_REVIEWS'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

const receiveSnackReview = review => ({
  type: RECEIVE_SNACK_REVIEW,
  review
})

const receiveSnackReviews = reviews => ({
  type: RECEIVE_SNACK_REVIEWS,
  reviews
})

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const createSnackReview = review => dispatch => (
  ReviewAPIUtils.createSnackReview(review)
    .then(review => dispatch(receiveSnackReview(review)), errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const fetchSnackReviews = snackId => dispatch => (
  ReviewAPIUtils.fetchSnackReviews(snackId)
    .then(reviews => dispatch(receiveSnackReviews(reviews)))
)
