import { RECEIVE_SUGGESTIONS } from "../actions/snack_actions"

const suggestionsReducer = (state=[], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SUGGESTIONS:
      return action.suggestions
    default:
      return state
  }
}

export default suggestionsReducer
