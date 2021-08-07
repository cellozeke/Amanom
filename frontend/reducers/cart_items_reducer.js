import { RECEIVE_CART_ITEMS } from "../actions/item_actions"

const cartItemsReducer = (state=[], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.items
    default:
      return state
  }
}

export default cartItemsReducer
