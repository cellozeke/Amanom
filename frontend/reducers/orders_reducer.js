import { RECEIVE_ORDER, RECEIVE_ORDERS } from "../actions/order_actions"
import { LOG_OUT_CURRENT_USER } from "../actions/session_actions"

const ordersReducer = (state=null, action) => {
  const clone = items => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_ORDER:
      nextState.push(action.order)
      return nextState
    case RECEIVE_ORDERS:
      return nextState.concat(action.orders)
    case LOG_OUT_CURRENT_USER:
      return null
    default:
      return state
  }
}

export default ordersReducer
