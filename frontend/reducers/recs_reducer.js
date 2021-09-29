import { LOG_OUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_REC_SNACKS } from "../actions/snack_actions"

const recsReducer = (state=null, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REC_SNACKS:
      return action.snacks
    case LOG_OUT_CURRENT_USER:
      // nextState.recent = []
      // return nextState
      return null
    default:
      return null
  }
}

export default recsReducer
