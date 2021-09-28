import { RECEIVE_REC_SNACKS } from "../actions/snack_actions"

const recsReducer = (state=null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_REC_SNACKS:
      return action.snacks
    default:
      return state
  }
}

export default recsReducer
