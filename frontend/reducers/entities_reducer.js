import { combineReducers } from "redux"
import snacksReducer from "./snacks_reducer"
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  snacks: snacksReducer
})

export default entitiesReducer
