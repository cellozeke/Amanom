import { combineReducers } from "redux"
import ordersReducer from "./orders_reducer"
import snacksReducer from "./snacks_reducer"
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  snacks: snacksReducer,
  orders: ordersReducer
})

export default entitiesReducer
