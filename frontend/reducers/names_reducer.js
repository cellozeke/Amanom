import { RECEIVE_SNACK_NAMES } from "../actions/snack_actions"

const namesReducer = (state=[], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SNACK_NAMES:
      return action.names
    default:
      return state
  }
}

export default namesReducer
