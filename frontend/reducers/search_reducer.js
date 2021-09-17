import { CLEAR_SEARCHED_SNACKS, RECEIVE_SEARCHED_SNACKS } from "../actions/snack_actions"

const searchReducer = (state=null, action) => {
  const clone = items => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_SEARCHED_SNACKS:
      return action.snacks
    case CLEAR_SEARCHED_SNACKS:
      return null
    default:
      return state
  }
}

export default searchReducer
