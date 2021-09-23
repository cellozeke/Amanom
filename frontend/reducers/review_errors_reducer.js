import { RECEIVE_REVIEW_ERRORS } from "../actions/review_actions"

const reviewErrorsReducer = (state=[], action) => {
  const clone = errors => errors.map(error => Array.isArray(error) ? clone(error) : error)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    default:
      return []
  }
}

export default reviewErrorsReducer
