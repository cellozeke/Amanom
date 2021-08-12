import { RECEIVE_SNACK_REVIEWS } from "../actions/review_actions"

const reviewsReducer = (state=[], action) => {
  const clone = items => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SNACK_REVIEWS:
      console.log(action.reviews)
      return action.reviews
    default:
      return state
  }
}

export default reviewsReducer
