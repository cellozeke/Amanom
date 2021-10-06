import { combineReducers } from "redux"
import cartItemsReducer from "./cart_items_reducer"
import suggestionsReducer from "./suggestions_reducer"
import ordersReducer from "./orders_reducer"
import recsReducer from "./recs_reducer"
import reviewsReducer from "./reviews_reducer"
import searchReducer from "./search_reducer"
import snacksReducer from "./snacks_reducer"
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  snacks: snacksReducer,
  orders: ordersReducer,
  cartItems: cartItemsReducer,
  search: searchReducer,
  reviews: reviewsReducer,
  recs: recsReducer,
  suggestions: suggestionsReducer
})

export default entitiesReducer
