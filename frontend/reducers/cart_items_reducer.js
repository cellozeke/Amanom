import { CREATE_CART_ITEM, UPDATE_CART_ITEM, RECEIVE_CART_ITEMS, REFRESH_CART, ZERO_STORE_CART_ITEM } from "../actions/item_actions"

const cartItemsReducer = (state=null, action) => {
  const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  let nextState = clone(state || [])
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.items.sort((a, b) => b.createdAt - a.createdAt)
      // return action.items.sort((a, b) => b.id - a.id)
    case UPDATE_CART_ITEM:
      nextState.forEach(item => {if (item.id === action.item.id) item.quantity = action.item.quantity})
      return nextState
    case CREATE_CART_ITEM:
      nextState.push(action.item)
      return nextState
    case ZERO_STORE_CART_ITEM:
      nextState.forEach(item => {if (item.id === action.itemId) item.quantity = 0})
      return nextState
    case REFRESH_CART:
      return nextState.filter(item => item.quantity > 0)
    default:
      return state
  }
}

export default cartItemsReducer
