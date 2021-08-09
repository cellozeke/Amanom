import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REFRESH_CART, REMOVE_CART_ITEM } from "../actions/item_actions"

const cartItemsReducer = (state=null, action) => {
  const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item)
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.items.sort((a, b) => b.id - a.id)
    case RECEIVE_CART_ITEM:
      let nextState = clone(state || [])
      nextState.forEach(item => {if (item.id === action.item.id) item.quantity = action.item.quantity})
      console.log(nextState)
      return nextState
    // case REFRESH_CART:
    //   let refreshedState = clone(state)
    //   return refreshedState.filter(item => item.quantity > 0)
    case REMOVE_CART_ITEM:
      let removedState = clone(state || [])
      // removedState.forEach(item => {if (item.id === action.item.id) item.quantity === 0})
      // return removedState
      return removedState.filter(item => item.id !== action.item.id)
    default:
      return state
  }
}

export default cartItemsReducer
