import * as ReviewAPIUtils from '../utils/review_utils'

export const RECEIVE_SNACK_REVIEWS = 'RECEIVE_SNACK_REVIEWS'

const receiveSnackReviews = reviews => ({
  type: RECEIVE_SNACK_REVIEWS,
  reviews
})

export const fetchSnackReviews = snackId => dispatch => (
  ReviewAPIUtils.fetchSnackReviews(snackId)
    .then(reviews => dispatch(receiveSnackReviews(reviews)))
)
