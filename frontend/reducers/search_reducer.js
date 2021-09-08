import { CLEAR_SEARCHED_SNACKS, RECEIVE_SEARCHED_SNACKS, SORT_BY_ASCENDING_PRICE, SORT_BY_DESCENDING_PRICE, SORT_BY_RATING, SORT_BY_RELEVANCE, SORT_BY_REVIEWS } from "../actions/snack_actions"

const searchReducer = (state=null, action) => {
  const clone = items => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_SEARCHED_SNACKS:
      return action.snacks
    case CLEAR_SEARCHED_SNACKS:
      return null
    case SORT_BY_RELEVANCE:
      return [...nextState].sort((a, b) => b.relevance - a.relevance)
    case SORT_BY_ASCENDING_PRICE:
      return [...nextState].sort((a, b) => a.price - b.price)
    case SORT_BY_DESCENDING_PRICE:
      return [...nextState].sort((a, b) => b.price - a.price)
    case SORT_BY_RATING:
      return [...nextState].sort((a, b) => b.rating - a.rating)
    case SORT_BY_REVIEWS:
      return [...nextState].sort((a, b) => b.numReviews - a.numReviews)
    default:
      return state
  }
}

export default searchReducer
