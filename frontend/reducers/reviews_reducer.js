import { RECEIVE_SNACK_REVIEW, RECEIVE_SNACK_REVIEWS, RECEIVE_USER_REVIEWS } from "../actions/review_actions"

const reviewsReducer = (state=[], action) => {
  const clone = reviews => reviews.map(review => Array.isArray(review) ? clone(review) : review)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_USER_REVIEWS:
      return action.reviews
    case RECEIVE_SNACK_REVIEW:
      nextState = nextState.filter(review => review.id !== action.review.id)
      nextState.push(action.review)
      return nextState
    case RECEIVE_SNACK_REVIEWS:
      return action.reviews
    default:
      return state
  }
}

export default reviewsReducer
