import { RECEIVE_ORDER } from "../actions/order_actions"

const ordersReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ORDER:
      let nextState = Object.assign({}, state)
      nextState[action.order.id] = action.order
      return nextState
    default:
      return state
  }
}

export default ordersReducer
