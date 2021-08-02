import { LOG_OUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions"

export default SessionReducer = (state={id: null}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id}
    case LOG_OUT_CURRENT_USER:
      return {id: null}
    default:
      return state
  }
}
