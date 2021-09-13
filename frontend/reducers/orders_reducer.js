import { CLEAR_CART_ITEMS, RECEIVE_ORDER } from "../actions/order_actions"

const ordersReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    // case RECEIVE_ORDER:
    //   let nextState = Object.assign({}, state)
    //   nextState[action.order.id] = action.order
    //   return nextState
    case CLEAR_CART_ITEMS:
      return {}
    default:
      return state
  }
}

export default ordersReducer
