import { ADD_RECENT_ITEM, REFRESH_ITEMS } from "../actions/item_actions"

const recentItemReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case ADD_RECENT_ITEM:
      return action.item
    case REFRESH_ITEMS:
      return {}
    default:
      return state
  }
}

export default recentItemReducer
