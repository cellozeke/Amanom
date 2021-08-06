import { RECEIVE_SNACK } from "../actions/snack_actions"

const snacksReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SNACK:
      let nextState = Object.assign({}, state)
      nextState[action.snack.id] = action.snack
      return nextState
    default:
      return state
  }
}
